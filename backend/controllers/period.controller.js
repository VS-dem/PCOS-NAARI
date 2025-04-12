import { PeriodLog } from "../models/period.model.js";

// @desc    Get all period logs for user
export const getAllPeriodLogs = async (req, res) => {
  try {
    const logs = await PeriodLog.find({ userId: req.user._id }).sort({ cycleStart: -1 });
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch period logs" });
  }
};

// @desc    Create a new period log
export const createPeriodLog = async (req, res) => {
  try {
    const newLog = new PeriodLog({
      ...req.body,
      userId: req.user._id,
    });
    const savedLog = await newLog.save();
    res.status(201).json(savedLog);
  } catch (err) {
    res.status(400).json({ error: "Failed to create period log", details: err.message });
  }
};

// @desc    Update a specific period log
export const updatePeriodLog = async (req, res) => {
  try {
    const updated = await PeriodLog.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: "Period log not found" });

    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: "Failed to update log", details: err.message });
  }
};

// @desc    Delete a specific period log
export const deletePeriodLog = async (req, res) => {
  try {
    const deleted = await PeriodLog.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!deleted) return res.status(404).json({ error: "Period log not found" });

    res.status(200).json({ message: "Period log deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete log" });
  }
};