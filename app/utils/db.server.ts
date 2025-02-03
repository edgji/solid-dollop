import { PrismaPg } from "@prisma/adapter-pg-worker";
import { PrismaClient } from "@prisma/client";
import { Pool } from "@prisma/pg-worker";
import { enhance } from "@zenstackhq/runtime";

export function db(url: string): PrismaClient {
  const pool = new Pool({ connectionString: url });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  return enhance(prisma);
}

export default db;
export { db as prisma };
