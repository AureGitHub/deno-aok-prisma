import { PrismaClient } from "../generated/client/deno/edge.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: Deno.env.get('DATABASE_URL_VALLEGRANDE') 
    },
  },
});

export default prisma;