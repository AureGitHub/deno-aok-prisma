import { PrismaClient } from "../../generated/client/deno/edge.ts";


const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'prisma://aws-us-east-1.prisma-data.com/?api_key=OM3bBQykuGujcvTrJSZRC01qjvYssm1k9KxluxSv4mJ-Q7RcVUCK3upRzRYkaXMB'
    },
  },
});

await prisma.tipoagenda.deleteMany();

await prisma.tipoagenda.createMany({
  data : [
    {id: 1, descripcion : 'General', color: 'blue'},
    {id: 2, descripcion : 'Medicina', color: 'red'},
    {id: 3, descripcion : 'Empleadas', color: 'green'},
  ]
});

await prisma.$disconnect();




