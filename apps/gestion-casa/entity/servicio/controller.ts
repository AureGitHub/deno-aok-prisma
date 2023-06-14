import { Context, StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: any) => {

    const data = await prisma.servicio.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.servicio.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const add = async (ctx: any) => {
    try {
      const empleada: Prisma.servicioCreateInput = await ctx.request.body().value;
      
  
      const data = await prisma.servicio.create({
        data: empleada
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
      const servicioUpdateInput: Prisma.servicioUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const data = await prisma.servicio.updateMany({
        where: {id },
        data: servicioUpdateInput
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
      const data = await prisma.servicio.deleteMany({where: {id}});
  
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
