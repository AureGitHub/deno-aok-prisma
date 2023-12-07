// deno-lint-ignore-file no-explicit-any
import prisma from "../prisma/db.ts";


const create = (tipoid: any, importe: any, userid: any) => {
    return prisma.userXMovimiento.create({ data: { tipoid, importe, userid } });
}


const update = (id: any, updateValue: any) => {
    return prisma.userXMovimiento.updateMany({ where: { id }, data: updateValue });
}



const del = (id: any) => {
    return  prisma.userXMovimiento.deleteMany({ where: { id } });
  };


export default {
    create,
    update,
    del
}