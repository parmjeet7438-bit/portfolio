import dotenv from "dotenv";
import { connectDB, disconnectDB } from "../config/db";
import { seedDatabase } from "./seedService";

dotenv.config();

async function main() {
  await connectDB();
  await seedDatabase();
  console.log("Seed complete");
  await disconnectDB();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
