import { Request, Response, NextFunction } from "express";
import { PortfolioInfo } from "../models/PortfolioInfo";
import { Analytics } from "../models/Analytics";

export async function getPortfolioInfo(_req: Request, res: Response, next: NextFunction) {
  try {
    let info = await PortfolioInfo.findOne();
    if (!info) {
      info = await PortfolioInfo.create({});
    }
    res.json({ success: true, data: info });
  } catch (error) {
    next(error);
  }
}

export async function updatePortfolioInfo(req: Request, res: Response, next: NextFunction) {
  try {
    let info = await PortfolioInfo.findOne();
    if (!info) info = await PortfolioInfo.create(req.body);
    else info = await PortfolioInfo.findByIdAndUpdate(info._id, req.body, { new: true });
    res.json({ success: true, data: info });
  } catch (error) {
    next(error);
  }
}

export async function trackVisit(_req: Request, res: Response, next: NextFunction) {
  try {
    await Analytics.create({ type: "visit", metadata: {} });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

export async function trackResumeDownload(_req: Request, res: Response, next: NextFunction) {
  try {
    await Analytics.create({ type: "resume_download", metadata: {} });
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
}

export async function getAnalytics(_req: Request, res: Response, next: NextFunction) {
  try {
    const [visits, downloads, contacts, messages] = await Promise.all([
      Analytics.countDocuments({ type: "visit" }),
      Analytics.countDocuments({ type: "resume_download" }),
      Analytics.countDocuments({ type: "contact" }),
      Analytics.find().sort({ createdAt: -1 }).limit(50),
    ]);

    res.json({
      success: true,
      data: { visits, downloads, contacts, recent: messages },
    });
  } catch (error) {
    next(error);
  }
}
