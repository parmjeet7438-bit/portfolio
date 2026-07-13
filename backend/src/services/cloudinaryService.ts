import { v2 as cloudinary } from "cloudinary";
import { env } from "../config/env";

if (env.cloudinary.cloudName) {
  cloudinary.config({
    cloud_name: env.cloudinary.cloudName,
    api_key: env.cloudinary.apiKey,
    api_secret: env.cloudinary.apiSecret,
  });
}

export { cloudinary };

export async function uploadToCloudinary(
  file: Express.Multer.File,
  folder = "portfolio"
): Promise<string> {
  if (!env.cloudinary.cloudName) {
    throw new Error("Cloudinary not configured");
  }

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (error, result) => {
        if (error || !result) reject(error || new Error("Upload failed"));
        else resolve(result.secure_url);
      }
    );
    stream.end(file.buffer);
  });
}
