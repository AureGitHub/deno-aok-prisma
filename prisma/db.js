import { PrismaClient } from "../generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.188.0/dotenv/mod.ts";

const envVars = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

export default prisma;