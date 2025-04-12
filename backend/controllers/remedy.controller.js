import { Remedy } from "../models/remedy.model.js";

// @desc    Get all remedies or filter by symptom
export const getAllRemedies = async (req, res) => {
  try {
    const { mood } = req.query;
    const filter = mood ? { mood: new RegExp(mood, "i") } : {};
    const remedies = await Remedy.find(filter).sort({ createdAt: -1 });
    res.status(200).json(remedies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch remedies" });
  }
};

// @desc    Create a new remedy (Admin use or logged-in user)
export const createRemedy = async (req, res) => {
  try {
    const newRemedy = new Remedy({
      ...req.body,
      isUserSubmitted: true // optional: set true if users create
    });
    const saved = await newRemedy.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Failed to create remedy", details: err.message });
  }
};