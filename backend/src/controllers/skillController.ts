import { Request, Response, NextFunction } from "express";
import { Skill } from "../models/Skill";

export async function getSkills(_req: Request, res: Response, next: NextFunction) {
  try {
    const skills = await Skill.find().sort({ category: 1, order: 1 });
    res.json({ success: true, data: skills });
  } catch (error) {
    next(error);
  }
}

export async function createSkill(req: Request, res: Response, next: NextFunction) {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (error) {
    next(error);
  }
}

export async function updateSkill(req: Request, res: Response, next: NextFunction) {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!skill) return res.status(404).json({ success: false, message: "Skill not found" });
    res.json({ success: true, data: skill });
  } catch (error) {
    next(error);
  }
}

export async function deleteSkill(req: Request, res: Response, next: NextFunction) {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Skill deleted" });
  } catch (error) {
    next(error);
  }
}
