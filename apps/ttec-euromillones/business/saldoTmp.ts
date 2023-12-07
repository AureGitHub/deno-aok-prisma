// deno-lint-ignore-file no-explicit-any
import prisma from "../prisma/db.ts";


const create = (userid: any, saldo: any, movimientoid: any) => {
    return prisma.userXSaldoXTmp.create({ data: { saldo, userid, movimientoid } });
}


const update = (id: any, updateValue: any) => {
    return prisma.userXSaldoXTmp.updateMany({ where: { id }, data: updateValue });
}


const delBymovimientoid = (movimientoid: any) => {
    return prisma.userXSaldoXTmp.deleteMany({ where: { movimientoid } });
  };

export default {
    create,
    update,
    delBymovimientoid
}