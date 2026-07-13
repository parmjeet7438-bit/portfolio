import { Router } from "express";
import {
  getTrainingImages,
  createTrainingImage,
  updateTrainingImage,
  deleteTrainingImage,
} from "../controllers/trainingController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/", getTrainingImages);
router.post("/", authMiddleware, createTrainingImage);
router.put("/:id", authMiddleware, updateTrainingImage);
router.delete("/:id", authMiddleware, deleteTrainingImage);

export default router;
