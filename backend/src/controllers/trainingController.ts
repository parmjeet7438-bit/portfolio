import { Request, Response, NextFunction } from "express";
import { TrainingImage } from "../models/TrainingImage";

export async function getTrainingImages(_req: Request, res: Response, next: NextFunction) {
  try {
    const images = await TrainingImage.find().sort({ order: 1 });
    res.json({ success: true, data: images });
  } catch (error) {
    next(error);
  }
}

export async function createTrainingImage(req: Request, res: Response, next: NextFunction) {
  try {
    const image = await TrainingImage.create(req.body);
    res.status(201).json({ success: true, data: image });
  } catch (error) {
    next(error);
  }
}

export async function updateTrainingImage(req: Request, res: Response, next: NextFunction) {
  try {
    const image = await TrainingImage.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!image) return res.status(404).json({ success: false, message: "Image not found" });
    res.json({ success: true, data: image });
  } catch (error) {
    next(error);
  }
}

export async function deleteTrainingImage(req: Request, res: Response, next: NextFunction) {
  try {
    await TrainingImage.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Image deleted" });
  } catch (error) {
    next(error);
  }
}
