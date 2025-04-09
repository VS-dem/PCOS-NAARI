import mongoose from "mongoose";

const symptomReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },

  symptoms: [{
    name: { type: String, required: true }, // e.g. 'bloating', 'headache'
    severity: {
      type: String,
      enum: ["mild", "moderate", "severe"],
      required: true
    },
    durationHours: Number, // how long symptom lasted
    notes: String
  }],

  impactOnDay: {
    type: String,
    enum: ["none", "mild", "moderate", "significant"]
  },

  tookMedication: { type: Boolean, default: false }

}, {
  timestamps: true
});

export const SymptomReport = mongoose.model("SymptomReport", symptomReportSchema);