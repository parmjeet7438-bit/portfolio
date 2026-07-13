import { Request, Response, NextFunction } from "express";
import { Certification } from "../models/Certification";

export async function getCertifications(_req: Request, res: Response, next: NextFunction) {
  try {
    const certs = await Certification.find().sort({ order: 1 });
    res.json({ success: true, data: certs });
  } catch (error) {
    next(error);
  }
}

export async function createCertification(req: Request, res: Response, next: NextFunction) {
  try {
    const cert = await Certification.create(req.body);
    res.status(201).json({ success: true, data: cert });
  } catch (error) {
    next(error);
  }
}

export async function updateCertification(req: Request, res: Response, next: NextFunction) {
  try {
    const cert = await Certification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cert) return res.status(404).json({ success: false, message: "Certification not found" });
    res.json({ success: true, data: cert });
  } catch (error) {
    next(error);
  }
}

export async function deleteCertification(req: Request, res: Response, next: NextFunction) {
  try {
    await Certification.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Certification deleted" });
  } catch (error) {
    next(error);
  }
}
