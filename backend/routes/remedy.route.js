import express from "express";
import {
  getAllRemedies,
  createRemedy
} from "../controllers/remedy.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// Public
router.get("/", getAllRemedies);

// Protected → only logged-in users can post a remedy
router.post("/", verifyToken, createRemedy);

export default router;