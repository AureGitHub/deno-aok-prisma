// deno-lint-ignore-file no-explicit-any
import { statusError, statusOK } from "../../../../utils/status.ts";
import {aureDB} from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import apuestaBusiness from "../../business/apuesta.ts";
import { TC_ApuestaEstado, TC_UserRole } from "../../enums.ts";
import { StatusCodes } from "https://deno.land/x/https_status_codes@v1.2.0/mod.ts";


const entity =new aureDB(client,entities,'Apuesta' );


const get= async (ctx: any) => {

    const sqlSelect = ` select a.*,ax.descripcion estado `;

  let sqlFrom =` 
  from "Apuesta" a 
  inner join "TC_ApuestaEstado" ax on a."estadoid" = ax.id`  ;

  sqlFrom+= !ctx.state.user.isAdmin ? ' inner join "UserXApuesta" uxa on a.id=uxa.apuestaid ' : ' ';


  const orderBydefect = ``;
  const result=await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data: result.data.rows, count: result.count },
   };

 
};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await entity.findFirst({where: {id}});
    statusOK(ctx,data);   

};


const add = async (ctx: any) => {
    try {
      const newItem = await ctx.request.body().value;
      const data = await entity.create({data: newItem});
      statusOK(ctx,data);    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };


  const update = async (ctx: any) =>  {
    try {
      const  id  = Number(ctx?.params?.id);
      const itemUpdateInput = await ctx.request.body().value; 
      const data = await entity.update({data: itemUpdateInput, where : {id}});
      statusOK(ctx,{rowCount : data?.rowCount});    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  
const del = async (ctx: any) =>  {
    try {
      const  id  = Number(ctx?.params?.id);
      const data = await entity.del({where: {id}});
      statusOK(ctx,{rowCount : data?.rowCount}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  const cerrar=async (ctx: any) =>  {
    try {

      const  id  = Number(ctx?.params?.id);

      const apuesta = await entity.findFirst({where:{id}});

      if(!apuesta){
          throw new Error('Problemas para acceder a la apuesta')
      }
  
      if(apuesta.estadoid != TC_ApuestaEstado.abierta){
          throw new Error('La apuesta debe estar abierta para poder cerrarla')
      }

      const data = await apuestaBusiness.cerrar(id);
      statusOK(ctx,{ok : data}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  const finalizar=async (ctx: any) =>  {
    try {

      const  id  = Number(ctx?.params?.id);
      const {apostado, ganado} = await ctx.request.body().value; 

      if(!ganado){
        throw new Error('No se puede finalizar la apuesta. Debe especificar la cantidad ganada')
      }

      const apuesta = await entity.findFirst({where:{id}});

      if(!apuesta){
          throw new Error('Problemas para acceder a la apuesta')
      }
  
      if(apuesta.estadoid != TC_ApuestaEstado.cerrada){
          throw new Error('La apuesta debe estar cerrada para poder Finalizar')
      }

      const data = await apuestaBusiness.finalizar(id,apostado, ganado);
      statusOK(ctx,{ok : data}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };


  


export default { 
    get,
    getById,
    add, 
    update, 
    del,
    cerrar,
    finalizar
};
