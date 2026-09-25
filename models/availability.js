const mongoose = require("mongoose");

const { Schema } = mongoose;

const availabilitySchema = new Schema(
  {
    listing: {
      type: Schema.Types.ObjectId,
      ref: "Listing",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    booking: {
      type: Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    status: {
      type: String,
      enum: ["reserved", "released"],
      default: "reserved",
      required: true,
    },
  },
  { timestamps: true },
);

availabilitySchema.index({ listing: 1, date: 1 }, { unique: true });
availabilitySchema.index({ booking: 1 });

module.exports = mongoose.model("Availability", availabilitySchema);