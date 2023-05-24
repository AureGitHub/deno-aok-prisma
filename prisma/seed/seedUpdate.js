import prisma from "../db.js";
import { Prisma } from "../../generated/client/deno/edge.js";

const dato = await prisma.TC_tiposGastos.update({
  where: {
    id: 1,
  },
  data: {
    descripcion: "Comprrrrrrrasssss",
  },
});

console.log(`update OK ${dato}`);