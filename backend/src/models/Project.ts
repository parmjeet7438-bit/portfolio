import mongoose, { Schema, Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  category: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  order: number;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    image: { type: String, default: "" },
    technologies: [{ type: String }],
    features: [{ type: String }],
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    category: { type: String, default: "fullstack" },
    tags: [{ type: String }],
    status: { type: String, enum: ["completed", "in-progress", "planned"], default: "completed" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

projectSchema.index({ category: 1, featured: -1, order: 1 });

export const Project = mongoose.model<IProject>("Project", projectSchema);
