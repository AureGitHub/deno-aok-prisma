// deno-lint-ignore-file no-explicit-any
import { TC_ApuestaEstado,  TC_UserEstado, TC_MovimientoTipo } from "../enums.ts";
import { aureDB } from "../../../aureDB/aureDB.ts"
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities.ts";

import userBusiness from "./user.ts";


const entityApuesta = new aureDB(client, entities, 'Apuesta');

const finalizar = async (apuestaid: number, apostado: number, ganado : number)=>{

    const str = `
    select u.id userid , u.saldo  from "UserXApuesta" ux 
    inner join "User" u on ux.userid = u.id 
    where 
    ux.apuestaid = ${apuestaid}  `;

    const userInApuesta = await client.queryObject({camelcase: true, text: str,});
    const transaction = client.createTransaction("tr_apu_finalizar");

    try{
        await transaction.begin();
        await entityApuesta.update({where: {id :apuestaid }, data:{estadoid :TC_ApuestaEstado.finalizada, ganado } ,tr :  transaction});    
        const importe=Number((Number(ganado)/Number(apostado)).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]);    
        for (const user of userInApuesta.rows) {
            await userBusiness.CambiarSaldo(user['userid'],Number(user['saldo']),importe,TC_MovimientoTipo.ganado,apuestaid,null,transaction);
          }
    
        await transaction.commit();

    }
    catch(err){
        transaction.rollback(); 
        throw err;
    }


   

    return true;

} 



const cerrar = async (apuestaid: number)=>{
    const entityUser = new aureDB(client, entities, 'User');
    const entityUserXApuesta = new aureDB(client, entities, 'UserXApuesta');
    const users = await entityUser.findMany({where: {estadoid: TC_UserEstado.activo }, whereLstStr : ['saldo > 1']});
    const apostado = users.length;
    const transaction = client.createTransaction("tr_apu_cerrar");
    try{
        await transaction.begin();
        await entityApuesta.update({where: {id :apuestaid }, data:{estadoid :TC_ApuestaEstado.cerrada, apostado } ,tr :  transaction})
        const importe=-1;
        for (const user of users) {
            await userBusiness.CambiarSaldo(user.id,Number(user.saldo),importe,TC_MovimientoTipo.reintegro,apuestaid,null,transaction);
            await entityUserXApuesta.create({data : {userid :user.id , apuestaid}, tr :  transaction});
          }
        await transaction.commit();

    }
    catch(err){
        transaction.rollback(); 
        throw err;
    }
    return true;

} 

export default {
    cerrar,
    finalizar
}


