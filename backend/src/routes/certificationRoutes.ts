import { Router } from "express";
import {
  getCertifications,
  createCertification,
  updateCertification,
  deleteCertification,
} from "../controllers/certificationController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/", getCertifications);
router.post("/", authMiddleware, createCertification);
router.put("/:id", authMiddleware, updateCertification);
router.delete("/:id", authMiddleware, deleteCertification);

export default router;
