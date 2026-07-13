import { Request, Response, NextFunction } from "express";
import { ContactMessage } from "../models/ContactMessage";
import { Analytics } from "../models/Analytics";
import { sendContactEmail } from "../services/emailService";

export async function submitContact(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, email, subject, message } = req.body;
    const contact = await ContactMessage.create({ name, email, subject, message });
    await Analytics.create({ type: "contact", metadata: { email } });
    await sendContactEmail({ name, email, subject, message });
    res.status(201).json({ success: true, message: "Message sent successfully", data: contact });
  } catch (error) {
    next(error);
  }
}

export async function getMessages(_req: Request, res: Response, next: NextFunction) {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({ success: true, data: messages });
  } catch (error) {
    next(error);
  }
}

export async function markMessageRead(req: Request, res: Response, next: NextFunction) {
  try {
    const message = await ContactMessage.findByIdAndUpdate(req.params.id, { read: true }, { new: true });
    if (!message) return res.status(404).json({ success: false, message: "Message not found" });
    res.json({ success: true, data: message });
  } catch (error) {
    next(error);
  }
}

export async function deleteMessage(req: Request, res: Response, next: NextFunction) {
  try {
    await ContactMessage.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Message deleted" });
  } catch (error) {
    next(error);
  }
}
