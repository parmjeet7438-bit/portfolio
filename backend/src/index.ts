import app from "./app";
import { connectDB, getDbStatus } from "./config/db";
import { env } from "./config/env";
import { seedDatabase } from "./services/seedService";

async function start() {
  await connectDB();

  if (getDbStatus()) {
    await seedDatabase();
  }

  app.listen(env.port, () => {
    console.log(`Server running on http://localhost:${env.port}`);
    console.log(`API health: http://localhost:${env.port}/api/health`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
