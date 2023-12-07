// deno-lint-ignore-file no-explicit-any
import prisma from "../prisma/db.ts";

const create = (bizumid: any, movimientoid: any) => {
    return prisma.bizumXMovimiento.create({ data: { bizumid, movimientoid } });
}

const update = (id: any, updateValue: any) => {
    return prisma.bizumXMovimiento.updateMany({ where: { id }, data: updateValue });
}


const delBymovimientoid = (movimientoid: any) => {
    return  prisma.bizumXMovimiento.deleteMany({ where: { movimientoid } });
  };




export default {
    create,
    update,
    delBymovimientoid
}