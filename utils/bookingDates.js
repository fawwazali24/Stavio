const DEFAULT_TIMEZONE = "UTC";
const MAX_STAY_NIGHTS = 30;

function getBookingTimezone() {
  return process.env.BOOKING_TIMEZONE || DEFAULT_TIMEZONE;
}

function isValidTimezone(timezone) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: timezone }).format();
    return true;
  } catch {
    return false;
  }
}

function parseCalendarDate(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    return null;
  }

  return date;
}

function addDays(date, days) {
  const result = new Date(date);
  result.setUTCDate(result.getUTCDate() + days);
  return result;
}

function formatCalendarDate(date) {
  return date.toISOString().slice(0, 10);
}

function normalizeBookingDates(checkIn, checkOut) {
  const timezone = getBookingTimezone();
  if (!isValidTimezone(timezone)) {
    return { error: "BOOKING_TIMEZONE is not a valid IANA timezone" };
  }

  const start = parseCalendarDate(checkIn);
  const end = parseCalendarDate(checkOut);
  if (!start || !end) {
    return { error: "checkIn and checkOut must be valid dates in YYYY-MM-DD format" };
  }
  if (end <= start) {
    return { error: "checkOut must be after checkIn" };
  }

  const nights = Math.round((end - start) / 86400000);
  if (nights > MAX_STAY_NIGHTS) {
    return { error: `A booking cannot exceed ${MAX_STAY_NIGHTS} nights` };
  }

  const dates = [];
  for (let index = 0; index < nights; index += 1) {
    dates.push(formatCalendarDate(addDays(start, index)));
  }

  return {
    checkIn: formatCalendarDate(start),
    checkOut: formatCalendarDate(end),
    dates,
    timezone,
  };
}

module.exports = { normalizeBookingDates, getBookingTimezone };