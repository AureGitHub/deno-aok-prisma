import { PrismaClient } from "../generated/client/deno/edge.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";


// const { DATABASE_URL_GENERAL } = Deno.env.toObject();
const { DATABASE_PRISMA_TTEC_EUROMILLONES } = Deno.env.toObject();


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_PRISMA_TTEC_EUROMILLONES
    },
  },
});

export default prisma;