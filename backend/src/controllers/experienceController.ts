import { Request, Response, NextFunction } from "express";
import { Experience } from "../models/Experience";

export async function getExperiences(_req: Request, res: Response, next: NextFunction) {
  try {
    const experiences = await Experience.find().sort({ order: 1, createdAt: -1 });
    res.json({ success: true, data: experiences });
  } catch (error) {
    next(error);
  }
}

export async function createExperience(req: Request, res: Response, next: NextFunction) {
  try {
    const experience = await Experience.create(req.body);
    res.status(201).json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
}

export async function updateExperience(req: Request, res: Response, next: NextFunction) {
  try {
    const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!experience) return res.status(404).json({ success: false, message: "Experience not found" });
    res.json({ success: true, data: experience });
  } catch (error) {
    next(error);
  }
}

export async function deleteExperience(req: Request, res: Response, next: NextFunction) {
  try {
    await Experience.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Experience deleted" });
  } catch (error) {
    next(error);
  }
}
