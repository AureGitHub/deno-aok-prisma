import { PrismaClient } from "../../generated/client/deno/edge.ts";


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'prisma://aws-us-east-1.prisma-data.com/?api_key=OM3bBQykuGujcvTrJSZRC01qjvYssm1k9KxluxSv4mJ-Q7RcVUCK3upRzRYkaXMB'
    },
  },
});

await prisma.tipogasto.deleteMany();

await prisma.tipogasto.createMany({
  data : [
    {id: 1, descripcion : 'servicio', color: 'red'},
    {id: 2, descripcion : 'compras', color: 'blue'},
    {id: 3, descripcion : 'menu', color: 'green'},
    {id: 4, descripcion : 'otros', color: 'grey'},
  ]
});

await prisma.$disconnect();




