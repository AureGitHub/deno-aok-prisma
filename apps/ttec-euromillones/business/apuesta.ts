// deno-lint-ignore-file no-explicit-any
import { ApuestaXEstado,  Estado, UserXMovimientoXTipo } from "../enums.ts";
import { aureDB } from "../../../aureDB/aureDB.ts"
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities.ts";


const entityApuesta = new aureDB(client, entities, 'Apuesta');

const finalizar = async (apuestaid: number, ganado : number)=>{
    
    const entityUserXApuesta = new aureDB(client, entities, 'UserXApuesta');

    const usersInApuesta = await entityUserXApuesta.findMany({where: {apuestaid }});






    return true;

    const entityUser = new aureDB(client, entities, 'User');
    const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');
    const entityUserXSaldoXTmp = new aureDB(client, entities, 'UserXSaldoXTmp');


    

    const users = await entityUser.findMany({where: {estadoid: Estado.activo }, whereLstStr : ['saldo > 1']});

    const apostado = users.length;

    const transaction = client.createTransaction("transaction_1", {
        isolation_level: "repeatable_read",
    });

    await transaction.begin();

    await entityApuesta.update({where: {id :apuestaid }, data:{estadoid :ApuestaXEstado.cerrada, apostado } ,tr :  transaction})

    const importe=-1;

    for (const user of users) {
        const userid=user.id;
        const saldo = Number(user.saldo) + importe;    
        await entityUser.update({where: {id :user.id }, data:{saldo} ,tr :  transaction})
        const objMov={ tipoid: UserXMovimientoXTipo.reintegro, importe , userid }
        const createMovimiento = await entityUserXMovimiento.create({data:objMov ,tr :  transaction  });
        const objMovTmp =  {saldo, userid , movimientoid: createMovimiento.id};
        await entityUserXSaldoXTmp.create({data: objMovTmp, tr :  transaction });
        await entityUserXApuesta.create({data : {userid, apuestaid}, tr :  transaction});
      }

    await transaction.commit();

    return true;

} 




const cerrar = async (apuestaid: number)=>{
    const entityUser = new aureDB(client, entities, 'User');
    const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');
    const entityUserXSaldoXTmp = new aureDB(client, entities, 'UserXSaldoXTmp');
    const entityUserXApuesta = new aureDB(client, entities, 'UserXApuesta');


    

    const users = await entityUser.findMany({where: {estadoid: Estado.activo }, whereLstStr : ['saldo > 1']});

    const apostado = users.length;

    const transaction = client.createTransaction("transaction_1", {
        isolation_level: "repeatable_read",
    });

    await transaction.begin();

    await entityApuesta.update({where: {id :apuestaid }, data:{estadoid :ApuestaXEstado.cerrada, apostado } ,tr :  transaction})

    const importe=-1;

    for (const user of users) {
        const userid=user.id;
        const saldo = Number(user.saldo) + importe;    
        await entityUser.update({where: {id :user.id }, data:{saldo} ,tr :  transaction})
        const objMov={ tipoid: UserXMovimientoXTipo.reintegro, importe , userid }
        const createMovimiento = await entityUserXMovimiento.create({data:objMov ,tr :  transaction  });
        const objMovTmp =  {saldo, userid , movimientoid: createMovimiento.id};
        await entityUserXSaldoXTmp.create({data: objMovTmp, tr :  transaction });
        await entityUserXApuesta.create({data : {userid, apuestaid}, tr :  transaction});
      }

    await transaction.commit();

    return true;

} 


export default {
    cerrar,
    finalizar
}


