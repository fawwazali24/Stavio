const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookingSchema = new Schema(
  {
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
      index: true,
    },
    guest: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["confirmed", "cancelled"],
      default: "confirmed",
      required: true,
    },
    idempotencyKey: {
      type: String,
      required: true,
    },
    requestFingerprint: {
      type: String,
      required: true,
    },
    confirmation: {
      type: Schema.Types.Mixed,
      default: undefined,
    },
  },
  { timestamps: true },
);

bookingSchema.index(
  { guest: 1, listing: 1, idempotencyKey: 1 },
  { unique: true },
);
bookingSchema.index({ listing: 1, checkIn: 1, checkOut: 1 });

module.exports = mongoose.model("Booking", bookingSchema);