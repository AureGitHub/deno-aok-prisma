import { PrismaClient } from "../generated/client/deno/edge.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";


console.log(Deno.env.get('DATABASE_URL_GENERAL'));

const prisma = new PrismaClient({
  datasources: {
    db: {
      //url: Deno.env.get('DATABASE_URL_GENERAL') 
      url: 'prisma://aws-us-east-1.prisma-data.com/?api_key=TEXaMx-8YiRaiDd86t0YnZHObHGiye4Be_jcgnP3rFohSEyMS-l9ckKXMxDqA4fV'
    },
  },
});

export default prisma;