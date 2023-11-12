import { PrismaClient } from "../generated/client/deno/edge.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'prisma://aws-us-east-1.prisma-data.com/?api_key=wjob6VYlN4C5CGBTRXgjFH8838yXYCIEzpsQdKcU-BpIhMeXZ3E9pXsHdP_zRytq'
    },
  },
});

export default prisma;