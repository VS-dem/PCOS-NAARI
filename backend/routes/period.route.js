import express from "express";
import {
  getAllPeriodLogs,
  createPeriodLog,
  updatePeriodLog,
  deletePeriodLog
} from "../controllers/period.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// All routes below require authentication
router.use(verifyToken);

router.get("/", getAllPeriodLogs);
router.post("/", createPeriodLog);
router.put("/:id", updatePeriodLog);
router.delete("/:id", deletePeriodLog);

export default router;