import mongoose, { Schema, Document } from "mongoose";

export interface ITrainingImage extends Document {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  order: number;
}

const trainingImageSchema = new Schema<ITrainingImage>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    imageUrl: { type: String, required: true },
    category: { type: String, default: "ai-lab" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

trainingImageSchema.index({ category: 1, order: 1 });

export const TrainingImage = mongoose.model<ITrainingImage>("TrainingImage", trainingImageSchema);
