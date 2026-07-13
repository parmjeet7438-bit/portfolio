import { Router } from "express";
import {
  getPortfolioInfo,
  updatePortfolioInfo,
  trackVisit,
  trackResumeDownload,
  getAnalytics,
} from "../controllers/portfolioController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/", getPortfolioInfo);
router.put("/", authMiddleware, updatePortfolioInfo);
router.post("/track/visit", trackVisit);
router.post("/track/resume", trackResumeDownload);
router.get("/analytics", authMiddleware, getAnalytics);

export default router;
