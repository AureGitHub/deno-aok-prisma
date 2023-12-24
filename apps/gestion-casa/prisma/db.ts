import { PrismaClient } from "../generated/client/deno/edge.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";


const { DATABASE_URL_GESTIONCASA } = Deno.env.toObject();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL_GESTIONCASA
    },
  },
});

export default prisma;