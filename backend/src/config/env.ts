import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: parseInt(process.env.PORT || "6000", 10),
  nodeEnv: process.env.NODE_ENV || "development",
  mongoUri:
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/satnam_portfolio",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",
  groqApiKey: process.env.GROQ_API_KEY || "",
  mail: {
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    user: process.env.MAIL_USER || "",
    pass: process.env.MAIL_PASS || "",
  },
  jwtSecret: process.env.JWT_SECRET || "",
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
};
