// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../dep/deps.ts";
import { BizumXEstado, UserXMovimientoXTipo } from "../enums.ts";
import { aureDB } from "../../../aureDB/aureDB.ts"
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities.ts";


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


    const oldBizum = await entityUserXBizum.findFirst({ where: { id } });

    const entityUser = new aureDB(client, entities, 'User');


    const userUpdate = await entityUser.findFirst({ where: { id: oldBizum?.userid } });

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
        const saldo = Number(oldBizum.importe) + Number(userUpdate?.saldo);

        const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');
        const entityUserXSaldoXTmp = new aureDB(client, entities, 'UserXSaldoXTmp');
        const entityBizumXMovimiento = new aureDB(client, entities, 'BizumXMovimiento');

        

        const transaction = client.createTransaction("transaction_1", {
            isolation_level: "repeatable_read",
        });
    
        await transaction.begin();
        await entityUserXBizum.update({where: {id}, data:{estadoid : BizumXEstado.confirmado} ,tr :  transaction })
        await entityUser.update({where: {id :oldBizum.userid }, data:{saldo} ,tr :  transaction})
        const objMov={ tipoid: UserXMovimientoXTipo.ingreso, importe : oldBizum.importe, userid : oldBizum.userid }
        const createMovimiento = await entityUserXMovimiento.create({data:objMov ,tr :  transaction  });
        const objMovTmp =  {saldo, userid : oldBizum.userid, movimientoid: createMovimiento.id};
        await entityUserXSaldoXTmp.create({data: objMovTmp, tr :  transaction });
        const objBizumXMov =  {bizumid : id, movimientoid: createMovimiento.id};
        await entityBizumXMovimiento.create({data: objBizumXMov, tr :  transaction });
        await transaction.commit();



       
    }

    return null;

}



const desconfirmar = async (id: any) => {

    const entityUser = new aureDB(client, entities, 'User');
    const oldBizum = await entityUserXBizum.findFirst({ where: { id } });
    const userUpdate = await entityUser.findFirst({ where: { id: oldBizum?.userid } });

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

        const entityBizumXMovimiento = new aureDB(client, entities, 'BizumXMovimiento');
        const entityUserXSaldoXTmp = new aureDB(client, entities, 'UserXSaldoXTmp');
        const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');
        

        const bizumXMovimiento=  await entityBizumXMovimiento.findFirst({ where: { bizumid: oldBizum?.id } });

        const movimientoid = bizumXMovimiento?.movimientoid;


        const saldo =  Number(userUpdate?.saldo) - Number(oldBizum.importe);

        const transaction = client.createTransaction("transaction_1", {
            isolation_level: "repeatable_read",
        });
    
        await transaction.begin();
        await entityUserXBizum.update({where: {id}, data:{estadoid : BizumXEstado.pendiente} ,tr :  transaction });
        await entityUser.update({where: {id :oldBizum.userid }, data:{saldo} ,tr :  transaction})
        await entityUserXSaldoXTmp.del({where: {movimientoid } ,tr :  transaction})
        await entityBizumXMovimiento.del({where: {movimientoid } ,tr :  transaction})
        await entityUserXMovimiento.del({where: {id: movimientoid } ,tr :  transaction})
        await transaction.commit();

    }

    return null;

}


const cerrarAll=()=>{
    return entityUserXBizum.update({
        where: { estadoid: BizumXEstado.confirmado },
        data: { estadoid: BizumXEstado.cerrado }
      });
}



export default {
    create,update,del, confirmar, desconfirmar,cerrarAll
}


