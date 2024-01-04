// deno-lint-ignore-file no-explicit-any
import { aureDB } from "../../../aureDB/aureDB.ts"
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities.ts";
import { StatusCodes } from "../../../dep/deps.ts";
import { Estado, UserXMovimientoXTipo } from "../enums.ts";



const addSaldo = async (id: number, importe: number) => {


    const entityUser = new aureDB(client, entities, 'User');
    const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');
    const entityUserXSaldoXTmp = new aureDB(client, entities, 'UserXSaldoXTmp');


    const user = await entityUser.findFirst({ where: { id } });
    if (!user || (user && user.estadoid == Estado.baja)) {
        return {
            error: {
                Status: 200,
                StatusCodes: StatusCodes.CONFLICT,
                message: "Usuario no existe o dado de baja. Póngase en contacto con el administrador"
            }
        }
    }

    let saldo = Number(user.saldo);
    saldo += importe;
    const userid = user.id;

    const transaction = client.createTransaction("transaction_1", {
        isolation_level: "repeatable_read",
    });

    await transaction.begin();

    await entityUser.update({ where: { id: user?.id }, data: { saldo }, tr :  transaction});
    
    const objMov = {tipoid: UserXMovimientoXTipo.ingreso,importe,userid}

    const createMovimiento = await entityUserXMovimiento.create({data:objMov ,tr :  transaction  });


    const objMovTmp =  {saldo, userid, movimientoid: createMovimiento.id};

    await entityUserXSaldoXTmp.create({data: objMovTmp, tr :  transaction });


    await transaction.commit();

    return true;


}

export default {
    addSaldo
}