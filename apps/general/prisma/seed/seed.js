import prisma from "../db.ts"



await prisma.userxApp.deleteMany();
await prisma.app.deleteMany();
await prisma.app.createMany({
  data : [
    {id: 1, descripcion : 'gestion-casa'},
    {id: 2, descripcion : 'ttec-auremillones'},
  ]
});


await prisma.userxApp.deleteMany();

await prisma.userxApp.createMany({
  data : [
    {userId : 1, appId : 2, role : 'GOD', estado : 'ACTIVE'},
  ]
});







await prisma.$disconnect();



