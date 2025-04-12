import express from "express";
import {
  getAllSymptomReports,
  createSymptomReport
} from "../controllers/symptoms.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// All symptom routes require login
router.use(verifyToken);

router.get("/", getAllSymptomReports);
router.post("/", createSymptomReport);

export default router;