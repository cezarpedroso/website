import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// A Vercel instance can scale independently; avoid the default 10 connections
// per instance. Use a pooled DATABASE_URL from the database provider as well.
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: process.env.VERCEL ? 1 : undefined,
  allowExitOnIdle: Boolean(process.env.VERCEL),
});
export const db = drizzle(pool, { schema });

export * from "./schema";
