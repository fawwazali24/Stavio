const crypto = require("crypto");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const Booking = require("../models/booking.js");
const Availability = require("../models/availability.js");
const ExpressError = require("../utils/ExpressError.js");
const { normalizeBookingDates } = require("../utils/bookingDates.js");
const { invalidateListings } = require("../utils/cache.js");

function requestFingerprint({ listingId, guestId, checkIn, checkOut }) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify({ listingId, guestId, checkIn, checkOut }))
    .digest("hex");
}

function isDuplicateKeyError(error) {
  return error?.code === 11000;
}

function bookingLog(event, details = {}) {
  console.info(`[booking] ${event}`, details);
}

module.exports.bookListing = async (req, res) => {
  const { id: listingId } = req.params;
  const idempotencyKey = req.get("Idempotency-Key");
  const requestId = crypto.randomUUID();

  bookingLog("request received", {
    requestId,
    listingId,
    guestId: req.user?._id?.toString(),
    hasIdempotencyKey: Boolean(idempotencyKey),
  });

  if (!idempotencyKey || idempotencyKey.length > 200) {
    bookingLog("request rejected", { requestId, reason: "invalid idempotency key" });
    throw new ExpressError(400, "A valid Idempotency-Key header is required");
  }

  const listing = await Listing.findById(listingId);
  if (!listing) {
    bookingLog("request rejected", { requestId, reason: "listing not found" });
    throw new ExpressError(404, "Listing you requested for does not exist");
  }

  const normalized = normalizeBookingDates(
    req.body?.checkIn,
    req.body?.checkOut,
  );
  if (normalized.error) {
    bookingLog("request rejected", { requestId, reason: normalized.error });
    throw new ExpressError(400, normalized.error);
  }

  const guestId = req.user._id.toString();
  const fingerprint = requestFingerprint({
    listingId,
    guestId,
    checkIn: normalized.checkIn,
    checkOut: normalized.checkOut,
  });

  const existingBooking = await Booking.findOne({
    guest: req.user._id,
    listing: listingId,
    idempotencyKey,
  });
  if (existingBooking) {
    if (existingBooking.requestFingerprint !== fingerprint) {
      bookingLog("idempotency conflict", { requestId, listingId, guestId });
      throw new ExpressError(
        409,
        "This Idempotency-Key was already used for a different booking request",
      );
    }
    bookingLog("replay returned", {
      requestId,
      bookingId: existingBooking._id.toString(),
      nights: normalized.dates.length,
    });
    return res.status(200).json({ booking: existingBooking, replay: true });
  }

  const session = await mongoose.startSession();
  try {
    let booking;
    bookingLog("transaction started", {
      requestId,
      listingId,
      guestId,
      checkIn: normalized.checkIn,
      checkOut: normalized.checkOut,
      nights: normalized.dates.length,
    });
    await session.withTransaction(async () => {
      booking = await Booking.create(
        [
          {
            listing: listingId,
            guest: req.user._id,
            checkIn: normalized.checkIn,
            checkOut: normalized.checkOut,
            idempotencyKey,
            requestFingerprint: fingerprint,
            confirmation: {
              timezone: normalized.timezone,
              nights: normalized.dates.length,
            },
          },
        ],
        { session },
      ).then(([createdBooking]) => createdBooking);

      await Availability.insertMany(
        normalized.dates.map((date) => ({
          listing: listingId,
          date,
          booking: booking._id,
        })),
        { session, ordered: true },
      );
      bookingLog("availability reserved", {
        requestId,
        bookingId: booking._id.toString(),
        nights: normalized.dates.length,
      });
    });

    bookingLog("transaction committed", {
      requestId,
      bookingId: booking._id.toString(),
    });
    await invalidateListings();
    bookingLog("booking completed", { requestId, bookingId: booking._id.toString() });
    return res.status(201).json({ booking, replay: false });
  } catch (error) {
    if (isDuplicateKeyError(error)) {
      const conflictingBooking = await Booking.findOne({
        guest: req.user._id,
        listing: listingId,
        idempotencyKey,
      });
      if (conflictingBooking?.requestFingerprint === fingerprint) {
        bookingLog("concurrent replay returned", {
          requestId,
          bookingId: conflictingBooking._id.toString(),
        });
        return res
          .status(200)
          .json({ booking: conflictingBooking, replay: true });
      }
      bookingLog("availability conflict", { requestId, listingId, guestId });
      throw new ExpressError(409, "The selected dates are unavailable");
    }
    bookingLog("transaction failed", {
      requestId,
      listingId,
      guestId,
      error: error.message,
    });
    throw error;
  } finally {
    await session.endSession();
  }
};