import {  StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: any) => {

    const data = await prisma.turno.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };
};


const add = async (ctx: any) => {
    try {
      const turno: Prisma.turnoCreateInput = await ctx.request.body().value;
      
      const data = await prisma.turno.create({
        data: turno
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

  
const del = async (ctx: any) =>  {
    try {
  
      const  id  = Number(ctx?.params?.id);
      const data = await prisma.turno.deleteMany({where: {id}});
  
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
    add, 
    del
};
