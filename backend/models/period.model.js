import mongoose from "mongoose";

const periodLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  // Core period info
  cycleStart: { type: Date, required: true },
  cycleEnd: { type: Date, required: true },
  flow: {
    type: String,
    enum: ["spotting", "light", "medium", "heavy"],
    default: "medium"
  },

  // Optional details
  painLevel: { 
    type: String,
    enum: ['low','moderate','high','extreme'] 
  },
  mood: {
    type: String,
    enum: ['anxious', 'sad', 'energized']
  }, 
  energyLevel: {
    type: String,
    enum: ["low", "moderate", "high"]
  },
  libido: {
    type: String,
    enum: ["low", "normal", "high"]
  },

  // Lifestyle & context
  sleepQuality: {
    type: String,
    enum: ["poor", "average", "good", "excellent"]
  },
  activityLevel: {
    type: String,
    enum: ["low", "moderate", "high"]
  },
  notes: String,

  // Health snapshot
  age: Number,
  weight: Number,
  location: String,
  hasPCOS: Boolean,
  isPredicted: { type: Boolean, default: false }

}, {
  timestamps: true
});

export const PeriodLog = mongoose.model("PeriodLog", periodLogSchema);