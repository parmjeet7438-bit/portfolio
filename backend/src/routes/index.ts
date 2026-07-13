import { Router } from "express";
import authRoutes from "./authRoutes";
import projectRoutes from "./projectRoutes";
import skillRoutes from "./skillRoutes";
import experienceRoutes from "./experienceRoutes";
import certificationRoutes from "./certificationRoutes";
import trainingRoutes from "./trainingRoutes";
import contactRoutes from "./contactRoutes";
import portfolioRoutes from "./portfolioRoutes";
import uploadRoutes from "./uploadRoutes";
import { getDbStatus } from "../config/db";

const router = Router();

router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/skills", skillRoutes);
router.use("/experience", experienceRoutes);
router.use("/certifications", certificationRoutes);
router.use("/training", trainingRoutes);
router.use("/contact", contactRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/upload", uploadRoutes);

router.get("/health", (_req, res) => {
  res.json({ success: true, message: "Portfolio API is running", db: getDbStatus() });
});

export default router;
