// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../../dep/deps.ts";
import { setStatus, statusError, statusOK } from "../../../../utils/status.ts";
import { TC_BizumEstado } from "../../enums.ts";
import { aureDB } from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import bizumBusiness from "../../business/bizum.ts";


const entity = new aureDB(client, entities, 'UserXBizum');


const get = async (ctx: any) => {

  const sqlSelect = `   
  select 
    ux.id as id,
    u."name" as dequien,
    ux.importe,
    ux."createdAt"  as fecha,
    ux."estadoid",
    ux."userid",
    uxx.descripcion as estadodesc
    
  `;

  const sqlFrom = ` 
  from "UserXBizum" ux 
  inner join "User" u on u.id = ux."userid" 
  inner join "TC_BizumEstado" uxx on ux."estadoid" = uxx.id 
    `;
  const orderBydefect = ``;
  await entity.execute_query(ctx, client, sqlSelect, sqlFrom, orderBydefect);

  

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await entity.findFirst({ where: { id } });
  statusOK(ctx, data);

};


const add = async (ctx: any) => {
  try {
    const newItem = await ctx.request.body().value;
    newItem.estadoid = TC_BizumEstado.pendiente;    
    const data = await entity.create({ data: newItem });   
      
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const update = async (ctx: any) => {
  try {
    const id = Number(ctx?.params?.id);
    
    const itemUpdateInput = await ctx.request.body().value;

    const oldBizum = await entity.findFirst({ where: { id } });

    if(oldBizum?.estadoid == TC_BizumEstado.pendiente && itemUpdateInput.estadoid == TC_BizumEstado.confirmado ){
      // Esta pendiente y lo pasamos a Confirmado
       await bizumBusiness.confirmar(id, oldBizum?.userid, oldBizum?.importe);
       statusOK(ctx, {ok: true});
      
    } else if(oldBizum?.estadoid == TC_BizumEstado.confirmado && itemUpdateInput.estadoid == TC_BizumEstado.pendiente ){
      // está Confirmado y lo pasamos a pendiente
      await bizumBusiness.desconfirmar(id, oldBizum?.userid, oldBizum?.importe);
      statusOK(ctx, {ok: true});
    }

    else if(oldBizum?.estadoid == TC_BizumEstado.cerrado && itemUpdateInput.estadoid == TC_BizumEstado.confirmado ){
      // está Cerrado y lo pasamos a Confirmado
      const data = await bizumBusiness.update(id,itemUpdateInput );          
      statusOK(ctx, data);
    }

    else{

      if(itemUpdateInput.estadoid != TC_BizumEstado.pendiente){
        setStatus(ctx, 200, StatusCodes.CONFLICT, "Solo se puede modificar si está pendiente!!!");
        return;
      }

    const data = await bizumBusiness.update(id,itemUpdateInput );      
    statusOK(ctx, data);
    }
    
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};

const confirmar = async (ctx: any) => {
  try {

    const id = Number(ctx?.params?.id);        
    const oldBizum = await entity.findFirst({ where: { id } });

    if (!oldBizum) {
      return {code: 200, StatusCodes: StatusCodes.CONFLICT, text: "No existe el usuario o el bizum!!"}  
    }
    

    await bizumBusiness.confirmar(id, oldBizum?.userid, oldBizum?.importe);    

    statusOK(ctx, {ok: true});
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const cerrarAll = async (ctx: any) => {
  try {

    const data = await bizumBusiness.cerrarAll();

    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const del = async (ctx: any) => {
  try {

   

    const id = Number(ctx?.params?.id);

    const oldBizum = await entity.findFirst({ where: { id } });

    if(oldBizum?.estadoid != TC_BizumEstado.pendiente){
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Para poder borrarlo, el bizum tiene qeu estar pendiente!!!");
      return;
    }

    const data = await bizumBusiness.del(id);
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


export default {
  get,
  getById,
  add,
  update,
  cerrarAll,
  confirmar,
  del
};
