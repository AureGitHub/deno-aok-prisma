import prisma from "../prisma/db.ts";
import { Prisma } from "../generated/client/deno/edge.ts";
import { StatusCodes } from "../../../dep/deps.ts";
import { BizumXEstado, UserXMovimientoXTipo } from "../enums.ts";
import userBusiness from "./user.ts";
import movimientoBusiness from "./movimiento.ts";
import saldoTmpBusiness from "./saldoTmp.ts";
import bizumXMovimientoBusiness from "./bizumXmovimiento.ts";


const create = (data: any) => {
    return prisma.userXBizum.create({ data });
}


const update = (id: any, itemUpdateInput: any) => {
    return prisma.userXBizum.updateMany({
        where: { id },
        data: itemUpdateInput
    })
}

const del = async (id: any) => {
    return await prisma.userXBizum.deleteMany({ where: { id } });
  };


function valicion(oldBizum: any, userUpdate: any) {
    if (!oldBizum) {
        return {
            code: 200,
            StatusCodes: StatusCodes.CONFLICT,
            text: "No existe el bizum buscado!!"
        }
    }

    // if (oldBizum.estadoid == BizumXEstado.confirmado) {

    //     return {
    //         code: 200,
    //         StatusCodes: StatusCodes.CONFLICT,
    //         text: "El bizum ya está confirmado !!"
    //     }
    // }

    if (!userUpdate) {

        return {
            code: 200,
            StatusCodes: StatusCodes.CONFLICT,
            text: "No existe el usuario del bizum!!"
        }

    }


    return null;

}


const confirmar = async (id: any) => {


    const oldBizum = await prisma.userXBizum.findFirst({ where: { id } });

    const userUpdate = await prisma.user.findFirst({ where: { id: oldBizum?.userid } });

    const val = valicion(oldBizum, userUpdate);
    if (val) { return val; }

  

    if (!oldBizum || !userUpdate) {
        return {
            code: 200,
            StatusCodes: StatusCodes.CONFLICT,
            text: "No existe el usuario o el bizum!!"   //nunca se puede dar... ya he validado!!
        }

    }
    else {
        const saldo = oldBizum.importe.toNumber() + userUpdate?.saldo.toNumber();
        const updateBizum = update(id, {estadoid : BizumXEstado.confirmado});
        const updateUser = userBusiness.update(oldBizum.userid, { saldo });
        const createMovimiento = movimientoBusiness.create(UserXMovimientoXTipo.ingreso, oldBizum.importe, oldBizum.userid);
        const createSaldoTmp = saldoTmpBusiness.create(oldBizum.userid, saldo, (await createMovimiento).id);
        const createBizumXMov = bizumXMovimientoBusiness.create(id, (await createMovimiento).id);
        await prisma.$transaction([updateBizum, updateUser, createSaldoTmp, createBizumXMov]);
    }

    return null;

}



const desconfirmar = async (id: any) => {


    const oldBizum = await prisma.userXBizum.findFirst({ where: { id } });

    const userUpdate = await prisma.user.findFirst({ where: { id: oldBizum?.userid } });

    const val = valicion(oldBizum, userUpdate);
    if (val) { return val; }

  

    if (!oldBizum || !userUpdate) {
        return {
            code: 200,
            StatusCodes: StatusCodes.CONFLICT,
            text: "No existe el usuario o el bizum!!"   //nunca se puede dar... ya he validado!!
        }

    }
    else {

        const bizumXMovimiento=  await prisma.bizumXMovimiento.findFirst({ where: { bizumid: oldBizum?.id } });

        const movimientoid = bizumXMovimiento?.movimientoid;


        const saldo =  userUpdate?.saldo.toNumber() - oldBizum.importe.toNumber();
        const updateBizum = update(id, {estadoid : BizumXEstado.pendiente});
        const updateUser = userBusiness.update(oldBizum.userid, { saldo });

        const delSaldoTmp = saldoTmpBusiness.delBymovimientoid(movimientoid);
        const delBizumXMov = bizumXMovimientoBusiness.delBymovimientoid(movimientoid);

        const delMovimiento = movimientoBusiness.del(movimientoid);

        


        await prisma.$transaction([updateBizum, updateUser, delSaldoTmp, delBizumXMov, delMovimiento]);
    }

    return null;

}


const cerrarAll=()=>{
    return  prisma.userXBizum.updateMany({
        where: { estadoid: BizumXEstado.confirmado },
        data: { estadoid: BizumXEstado.cerrado }
      });
}



export default {
    create,update,del, confirmar, desconfirmar,cerrarAll
}


