// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../dep/deps.ts";
import { TC_BizumEstado, TC_MovimientoTipo } from "../enums.ts";
import { aureDB } from "../../../aureDB/aureDB.ts"
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities/entities.ts";

import userBusiness from "./user.ts";


const entityUserXBizum = new aureDB(client, entities, 'UserXBizum');


const create = (data: any) => {
    return entityUserXBizum.create({ data });
}


const update = (id: any, itemUpdateInput: any) => {
    return entityUserXBizum.update({
        where: { id },
        data: itemUpdateInput
    })
}

const del = async (id: any) => {
    return await entityUserXBizum.del({ where: { id } });
};


const confirmar = async (bizumid: number, userid: number, importe: number) => {

    const entityUser = new aureDB(client, entities, 'User');
    const userUpdate = await entityUser.findFirst({ where: { id: userid } });

    const transaction = client.createTransaction("tr_bizum_confirm");

    try {
        await transaction.begin();
        await entityUserXBizum.update({ where: { id: bizumid }, data: { estadoid: TC_BizumEstado.confirmado }, tr: transaction });
        await userBusiness.CambiarSaldo(userid, Number(userUpdate?.saldo), Number(importe), TC_MovimientoTipo.ingreso, null,bizumid, transaction);
        await transaction.commit();
    }
    catch (err) {
        transaction.rollback();
        throw err;
    }

    return null;

}



const desconfirmar = async (bizumid: number,userid: number, importe : number) => {

    const entityUser = new aureDB(client, entities, 'User');
    const userUpdate = await entityUser.findFirst({ where: { id: userid } });

    const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');

    const userXMovimiento = await entityUserXMovimiento.findFirst({ where: { bizumid } });

    const movimientoid = userXMovimiento?.id;


    const saldo = Number(userUpdate?.saldo) - Number(importe);

    const transaction = client.createTransaction("transaction_1", {
        isolation_level: "repeatable_read",
    });

    await transaction.begin();
    await entityUserXBizum.update({ where: { id: bizumid }, data: { estadoid: TC_BizumEstado.pendiente }, tr: transaction });
    await entityUser.update({ where: { id: userid }, data: { saldo }, tr: transaction })
    await entityUserXMovimiento.del({ where: { id: movimientoid }, tr: transaction })
    await transaction.commit();

    return null;

}


const cerrarAll = () => {
    return entityUserXBizum.update({
        where: { estadoid: TC_BizumEstado.confirmado },
        data: { estadoid: TC_BizumEstado.cerrado }
    });
}



export default {
    create, update, del, confirmar, desconfirmar, cerrarAll
}


