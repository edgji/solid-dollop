import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";
import pg from "pg";
import { getEnv } from "./env.server";

const pool = new pg.Pool({ connectionString: getEnv("DATABASE_URL") });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
const db = enhance(prisma);

export default db;
export { db as prisma };
