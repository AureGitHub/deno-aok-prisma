import prisma from "../db.ts"

await prisma.TC_tiposGastos.deleteMany({});

// const TC_tiposGastosData = [
//   {
//     id: 1,
//     descripcion: "Compra",
//   },
//   {
//     id: 2,
//     descripcion: "Comida Pisos T",
//   },
// ];

// for (const u of TC_tiposGastosData) {
//   const tipo = await prisma.TC_tiposGastos.create({
//     data: u,
//   });
//   console.log(`Created TC_tiposGastos with id: ${tipo.id}`);
// }
// console.log(`Seeding finished.`);

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
    {userId : 1, appId : 1, role : 'ADMIN', estado : 'BLOCK'},
    {userId : 1, appId : 2, role : 'GOD', estado : 'ACTIVE'},
  ]
});







await prisma.$disconnect();



