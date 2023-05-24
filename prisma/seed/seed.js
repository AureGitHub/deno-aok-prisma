import prisma from "../db.js";

await prisma.TC_tiposGastos.deleteMany({});

const TC_tiposGastosData = [
  {
    id: 1,
    descripcion: "Compra",
  },
  {
    id: 2,
    descripcion: "Comida Pisos T",
  },
];

for (const u of TC_tiposGastosData) {
  const tipo = await prisma.TC_tiposGastos.create({
    data: u,
  });
  console.log(`Created TC_tiposGastos with id: ${tipo.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();
