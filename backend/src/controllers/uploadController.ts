import { Request, Response, NextFunction } from "express";
import multer from "multer";
import { uploadToCloudinary } from "../services/cloudinaryService";

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

export const uploadMiddleware = upload.single("file");

export async function uploadImage(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: "No file uploaded" });
    }
    const folder = (req.body.folder as string) || "portfolio";
    const url = await uploadToCloudinary(req.file, folder);
    res.json({ success: true, data: { url } });
  } catch (error) {
    next(error);
  }
}
