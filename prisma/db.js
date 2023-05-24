import { PrismaClient } from "../generated/client/deno/edge.ts";
import "https://deno.land/x/dotenv/load.ts";


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL') 
    },
  },
});

export default prisma;