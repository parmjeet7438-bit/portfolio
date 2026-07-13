import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { ApiError } from "../utils/ApiError";

export interface AuthRequest extends Request {
  adminId?: string;
}

export function authMiddleware(req: AuthRequest, _res: Response, next: NextFunction) {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    return next(new ApiError(401, "Authentication required"));
  }

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, env.jwtSecret) as { id: string };
    req.adminId = decoded.id;
    next();
  } catch {
    next(new ApiError(401, "Invalid or expired token"));
  }
}
