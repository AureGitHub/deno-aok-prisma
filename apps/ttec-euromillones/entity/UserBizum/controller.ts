// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../../dep/deps.ts";
import { execute_query, execute_query_deno_postgress } from "../../../../utils/query.ts";
import { setStatus, statusError, statusOK } from "../../../../utils/status.ts";
import { BizumXEstado, UserXMovimientoXTipo } from "../../enums.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import prisma from "../../prisma/db.ts";
import client from "../../prisma/db_deno-postgres.ts";

import bizumBusiness from "../../business/bizum.ts";


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
  inner join "UserXBizumXEstado" uxx on ux."estadoid" = uxx.id 
    `;
  const orderBydefect = ``;
   await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);
  
 // await execute_query_deno_postgress(ctx, client, sqlSelect, sqlFrom, orderBydefect);

  

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.userXBizum.findFirst({ where: { id } });
  statusOK(ctx, data);

};


const add = async (ctx: any) => {
  try {
    const newItem: Prisma.UserXBizumUncheckedCreateInput = await ctx.request.body().value;
    newItem.estadoid = BizumXEstado.pendiente;
    const data = await bizumBusiness.create(newItem);
      
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const update = async (ctx: any) => {
  try {
    const id = Number(ctx?.params?.id);
    
    const itemUpdateInput: Prisma.UserXBizumUncheckedUpdateInput = await ctx.request.body().value;

    const oldBizum = await prisma.userXBizum.findFirst({ where: { id } });

    if(oldBizum?.estadoid == BizumXEstado.pendiente && itemUpdateInput.estadoid == BizumXEstado.confirmado ){
      // Esta pendiente y lo pasamos a Confirmado
      const result = await bizumBusiness.confirmar(id);
      if(result){
        setStatus(ctx, result.code, result.StatusCodes, result.text);
      }
      else{
        statusOK(ctx, {ok: true});
      }
      
    } else if(oldBizum?.estadoid == BizumXEstado.confirmado && itemUpdateInput.estadoid == BizumXEstado.pendiente ){
      // está Confirmado y lo pasamos a pendiente
      const result = await bizumBusiness.desconfirmar(id);
      if(result){
        setStatus(ctx, result.code, result.StatusCodes, result.text);
      }
      else{
        statusOK(ctx, {ok: true});
      }
    }

    else if(oldBizum?.estadoid == BizumXEstado.cerrado && itemUpdateInput.estadoid == BizumXEstado.confirmado ){
      // está Cerrado y lo pasamos a Confirmado
      const data = await bizumBusiness.update(id,itemUpdateInput );          
      statusOK(ctx, data);
    }

    else{

      if(itemUpdateInput.estadoid != BizumXEstado.pendiente){
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
        // const itemUpdateInput: Prisma.UserXBizumUncheckedUpdateInput = await ctx.request.body().value;
    const result = await bizumBusiness.confirmar(id);
    if(result){
      //Hay error!!!
      setStatus(ctx, result.code, result.StatusCodes, result.text);
      return;
    }
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

    const oldBizum = await prisma.userXBizum.findFirst({ where: { id } });

    if(oldBizum?.estadoid != BizumXEstado.pendiente){
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
