import cors from "cors";
import { env } from "../config/env";

export const corsMiddleware = cors({
  origin: [env.clientUrl, "http://localhost:3000"],
  credentials: true,
});
