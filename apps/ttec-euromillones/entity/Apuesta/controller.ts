import { execute_query } from "../../../../utils/query.ts";
import { statusError, statusOK } from "../../../../utils/status.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: any) => {

    const sqlSelect = ` select a.*,ax.descripcion estado `;

  const sqlFrom =` 
  from "Apuesta" a 
  inner join "ApuestaXEstado" ax on a."estadoId" = ax.id  `;
  const orderBydefect = ``;
  await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);
 
};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.apuesta.findFirst({where: {id}});
    statusOK(ctx,data);   

};


const add = async (ctx: any) => {
    try {
      const newItem: Prisma.ApuestaCreateInput = await ctx.request.body().value;
      const data = await prisma.apuesta.create({
        data: newItem
      });
  
      statusOK(ctx,data);    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };


  const update = async (ctx: any) =>  {
    try {
  
      const  id  = Number(ctx?.params?.id);
      const itemUpdateInput: Prisma.ApuestaUpdateInput = await ctx.request.body().value;   
      const data = await prisma.apuesta.updateMany({
        where: {id },
        data: itemUpdateInput
      })
  
      statusOK(ctx,data);    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  

  
const del = async (ctx: any) =>  {
    try {
      const  id  = Number(ctx?.params?.id);
      const data = await prisma.apuesta.deleteMany({where: {id}});
      statusOK(ctx,data);    
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
