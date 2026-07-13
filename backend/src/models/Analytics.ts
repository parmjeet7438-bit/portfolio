import mongoose, { Schema, Document } from "mongoose";

export interface IAnalytics extends Document {
  type: "visit" | "resume_download" | "contact";
  metadata: Record<string, unknown>;
}

const analyticsSchema = new Schema<IAnalytics>(
  {
    type: { type: String, enum: ["visit", "resume_download", "contact"], required: true },
    metadata: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

analyticsSchema.index({ type: 1, createdAt: -1 });

export const Analytics = mongoose.model<IAnalytics>("Analytics", analyticsSchema);
