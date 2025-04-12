import { SymptomReport } from "../models/symptoms.model.js";

// @desc    Get all symptom reports for user
export const getAllSymptomReports = async (req, res) => {
  try {
    const userId = req.user._id;
    const reports = await SymptomReport.find({ userId }).sort({ date: -1 });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch symptom reports" });
  }
};

// @desc    Create a new symptom report
export const createSymptomReport = async (req, res) => {
  try {
    const userId = req.user._id;
    const newReport = new SymptomReport({ ...req.body, userId });
    const savedReport = await newReport.save();
    res.status(201).json(savedReport);
  } catch (err) {
    res.status(400).json({ error: "Failed to create symptom report", details: err.message });
  }
};