// deno-lint-ignore-file no-explicit-any
import { statusError, statusOK } from "../../../../utils/status.ts";
import {aureDB} from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities.ts";


const entity =new aureDB(client,entities,'Apuesta' );


const get= async (ctx: any) => {

    const sqlSelect = ` select a.*,ax.descripcion estado `;

  const sqlFrom =` 
  from "Apuesta" a 
  inner join "ApuestaXEstado" ax on a."estadoid" = ax.id  `;
  const orderBydefect = ``;
  await entity.execute_query(ctx, client, sqlSelect, sqlFrom, orderBydefect);
 
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


export default { 
    get,
    getById,
    add, 
    update, 
    del
};
