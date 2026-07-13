import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { env } from "./env";

let isConnected = false;
let memoryServer: MongoMemoryServer | null = null;

export function getDbStatus() {
  return isConnected;
}

export function isUsingMemoryDb() {
  return memoryServer !== null;
}

function isInvalidAtlasUri(uri: string) {
  return !uri || uri.includes("<db_password>") || uri.includes("<password>");
}

async function connectToUri(uri: string) {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
  await mongoose.connect(uri);
  isConnected = true;
}

export async function connectDB(): Promise<void> {
  const forceMemory = process.env.USE_MEMORY_DB === "true";

  if (!forceMemory && !isInvalidAtlasUri(env.mongoUri)) {
    try {
      await connectToUri(env.mongoUri);
      console.log("MongoDB Atlas connected");
      return;
    } catch (error) {
      console.warn("MongoDB Atlas connection failed, using in-memory database for local dev.");
      console.warn(error instanceof Error ? error.message : error);
    }
  }

  memoryServer = await MongoMemoryServer.create();
  const memoryUri = memoryServer.getUri("portfolio");
  await connectToUri(memoryUri);
  console.log("MongoDB in-memory connected (local development mode)");
}

export async function disconnectDB(): Promise<void> {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
  if (memoryServer) {
    await memoryServer.stop();
    memoryServer = null;
  }
  isConnected = false;
}
