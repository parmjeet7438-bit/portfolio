import mongoose, { Schema, Document } from "mongoose";

export interface ISkill extends Document {
  name: string;
  category: string;
  level: number;
  icon: string;
  order: number;
}

const skillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    level: { type: Number, min: 0, max: 100, default: 80 },
    icon: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

skillSchema.index({ category: 1, order: 1 });

export const Skill = mongoose.model<ISkill>("Skill", skillSchema);
