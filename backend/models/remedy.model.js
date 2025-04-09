import mongoose from "mongoose";

const remedySchema = new mongoose.Schema({
  symptom: { type: String, required: true }, // e.g. 'cramps'
  type: {
    type: String,
    enum: ["natural", "medication", "lifestyle", "exercise", "diet"],
    required: true
  },
  title: { type: String, required: true }, // e.g. 'Warm Compress'
  description: { type: String }, // e.g. 'Place a warm heating pad...'
  effectivenessRating: {
    type: Number,
    min: 1,
    max: 5
  },
  tags: [String], // e.g. ['home remedy', 'relaxation']
  source: { type: String }, // e.g. 'WebMD', 'User Tip', etc.

  isUserSubmitted: { type: Boolean, default: false }

}, {
  timestamps: true
});

export const Remedy = mongoose.model("Remedy", remedySchema);