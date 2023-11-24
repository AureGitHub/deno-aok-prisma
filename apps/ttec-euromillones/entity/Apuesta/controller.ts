import { StatusCodes } from "../../../../dep/deps.ts";
import { execute_query } from "../../../../utils/query.ts";
import { ApuestaXEstado } from "../../enums.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: any) => {

    const sqlSelect = ` select a.*,ax.descripcion estado `;

  const sqlFrom =` 
  from "Apuesta" a 
  inner join "ApuestaXEstado" ax on a."estadoId" = ax.id  `;
  const orderBydefect = ``;
  const result = await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: { data: result.data, count: result.count },
  };





};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.apuesta.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const add = async (ctx: any) => {
    try {
      const newItem: Prisma.ApuestaCreateInput = await ctx.request.body().value;

  
      const data = await prisma.apuesta.create({
        data: newItem
      });
  
      ctx.response.status = 201;
      ctx.response.body = {
        status: StatusCodes.OK,
        data,
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = { status: StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
      return;
    }
  };


  const update = async (ctx: any) =>  {
    try {
  
  
      const  id  = Number(ctx?.params?.id);

      const apuesta = await prisma.apuesta.findFirst({where: {id}});

      const itemUpdateInput: Prisma.ApuestaUpdateInput = await ctx.request.body().value;   

      const {estadoId} = itemUpdateInput;

      if(estadoId == ApuestaXEstado.cerrada){
       if(apuesta?.estadoId != ApuestaXEstado.abierta){

        ctx.response.status = 409;
        ctx.response.body = {
          status: StatusCodes.CONFLICT,
          message: 'Para poder cerrar, la apuesta debe estar abierta',
        };
        return;
        
       }
      }
      
      const data = await prisma.apuesta.updateMany({
        where: {id },
        data: itemUpdateInput
      })
  
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: StatusCodes.OK,
        data,
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
      return;
    }
  };

  

  
const del = async (ctx: any) =>  {
    try {
  
      const  id  = Number(ctx?.params?.id);
      const data = await prisma.apuesta.deleteMany({where: {id}});
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: StatusCodes.OK,
        data,
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
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
