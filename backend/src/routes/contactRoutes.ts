import { Router } from "express";
import { body } from "express-validator";
import {
  submitContact,
  getMessages,
  markMessageRead,
  deleteMessage,
} from "../controllers/contactController";
import { authMiddleware } from "../middleware/auth";
import { validateRequest } from "../middleware/validateRequest";
import { contactLimiter } from "../middleware/rateLimiter";

const router = Router();

router.post(
  "/",
  contactLimiter,
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("subject").trim().notEmpty().withMessage("Subject is required"),
    body("message").trim().isLength({ min: 10 }).withMessage("Message must be at least 10 characters"),
  ],
  validateRequest,
  submitContact
);

router.get("/", authMiddleware, getMessages);
router.patch("/:id/read", authMiddleware, markMessageRead);
router.delete("/:id", authMiddleware, deleteMessage);

export default router;
