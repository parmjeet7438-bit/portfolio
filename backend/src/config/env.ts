import dotenv from "dotenv";
dotenv.config();

function requireEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;
  if (!value) throw new Error(`Missing required environment variable: ${key}`);
  return value;
}

export const env = {
  port: parseInt(process.env.PORT || "6000", 10),
  mongoUri: requireEnv("MONGODB_URI"),
  jwtSecret: requireEnv("JWT_SECRET"),
  groqApiKey: process.env.GROQ_API_KEY || "",
  mail: {
    host: process.env.MAIL_HOST || "smtp.gmail.com",
    user: process.env.MAIL_USER || "",
    pass: process.env.MAIL_PASS || "",
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
    apiKey: process.env.CLOUDINARY_API_KEY || "",
    apiSecret: process.env.CLOUDINARY_API_SECRET || "",
  },
  admin: {
    email: process.env.ADMIN_EMAIL || "admin@portfolio.com",
    password: process.env.ADMIN_PASSWORD || "admin123",
  },
  clientUrl: process.env.CLIENT_URL || "http://localhost:3000",
};
