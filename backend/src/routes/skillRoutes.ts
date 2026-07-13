import { Router } from "express";
import { getSkills, createSkill, updateSkill, deleteSkill } from "../controllers/skillController";
import { authMiddleware } from "../middleware/auth";

const router = Router();

router.get("/", getSkills);
router.post("/", authMiddleware, createSkill);
router.put("/:id", authMiddleware, updateSkill);
router.delete("/:id", authMiddleware, deleteSkill);

export default router;
