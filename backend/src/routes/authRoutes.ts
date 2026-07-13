import { Router } from "express";
import { body } from "express-validator";
import { login, getProfile } from "../controllers/authController";
import { authMiddleware } from "../middleware/auth";
import { validateRequest } from "../middleware/validateRequest";
import { authLimiter } from "../middleware/rateLimiter";

const router = Router();

router.post(
  "/login",
  authLimiter,
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").notEmpty().withMessage("Password required"),
  ],
  validateRequest,
  login
);

router.get("/profile", authMiddleware, getProfile);

export default router;
