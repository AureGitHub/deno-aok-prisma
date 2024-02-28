// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../dep/deps.ts";
import { TC_BizumEstado, TC_MovimientoTipo } from "../enums.ts";
import { aureDB } from "../../../aureDB/aureDB.ts"
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities/entities.ts";

import userBusiness from "./user.ts";
import { sendEmail } from "../../../utils/sendEmail.ts";


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

    const saldoFinal =  Number(userUpdate?.saldo) + Number(importe);
    
    


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

    const subject = "TTEC-euromillones. Bizum recibido (email automático)";
    const bodyHtml = `<div>Bizum recibido : ${importe} €</div><div>(saldo anterior: ${userUpdate?.saldo})</div><div><span style='font-size: 15px;color : green'>${userUpdate.name}: ${saldoFinal} €</span></div>`;
    

    // const subject = "TTEC-euromillones. Su codigo para resetear la password";

    // const bodyHtml = `<div>Prueba final.Su codigo para resetear la password</div><div><span style='font-size: 15px;color : green'></span></div>`;




    const sender_email = await sendEmail(userUpdate.email, subject, bodyHtml);



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


