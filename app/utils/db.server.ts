import { PrismaPg } from "@prisma/adapter-pg-worker";
import { PrismaClient } from "@prisma/client";
import { Pool } from "@prisma/pg-worker";
import { enhance } from "@zenstackhq/runtime";
import { getEnv } from "./env.server";

const pool = new Pool({ connectionString: getEnv("DATABASE_URL") });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const db = enhance(prisma);

export default db;
export { db as prisma };
