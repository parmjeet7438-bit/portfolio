import mongoose, { Schema, Document } from "mongoose";

export interface ICertification extends Document {
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  credentialId: string;
  imageUrl: string;
  pdfUrl: string;
  description: string;
  order: number;
}

const certificationSchema = new Schema<ICertification>(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    issueDate: { type: String, default: "" },
    expiryDate: { type: String, default: "" },
    credentialId: { type: String, default: "" },
    imageUrl: { type: String, default: "" },
    pdfUrl: { type: String, default: "" },
    description: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

certificationSchema.index({ order: 1 });

export const Certification = mongoose.model<ICertification>("Certification", certificationSchema);
