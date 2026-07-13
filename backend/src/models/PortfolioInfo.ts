import mongoose, { Schema, Document } from "mongoose";

export interface IPortfolioInfo extends Document {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  profileImage: string;
  typingTitles: string[];
  socialLinks: { platform: string; url: string }[];
}

const portfolioInfoSchema = new Schema<IPortfolioInfo>(
  {
    name: { type: String, default: "Parmjeet Singh" },
    title: { type: String, default: "Full Stack Developer" },
    email: { type: String, default: "parmjeet7438@gmail.com" },
    phone: { type: String, default: "" },
    location: { type: String, default: "India" },
    bio: { type: String, default: "" },
    github: { type: String, default: "https://github.com/parmjeet7438-bit" },
    linkedin: { type: String, default: "https://www.linkedin.com/in/parmjeet-singh-17b713397" },
    resumeUrl: { type: String, default: "/resume/parmjeet-singh-resume.pdf" },
    profileImage: { type: String, default: "" },
    typingTitles: [{ type: String }],
    socialLinks: [{ platform: String, url: String }],
  },
  { timestamps: true }
);

export const PortfolioInfo = mongoose.model<IPortfolioInfo>("PortfolioInfo", portfolioInfoSchema);
