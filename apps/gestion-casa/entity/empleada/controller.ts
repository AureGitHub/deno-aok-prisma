import { Context, StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: any) => {

    const data = await prisma.empleada.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.empleada.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const add = async (ctx: any) => {
    try {
      const empleada: Prisma.empleadaCreateInput = await ctx.request.body().value;
      const {nombre} = empleada;
  
     const empleadaExists = await prisma.empleada.findUnique({where: {nombre}});
      if (empleadaExists) {
        ctx.response.status = 409;
        ctx.response.body = {
          status: StatusCodes.CONFLICT,
          message: "empleada with that name already exists",
        };
        return;
      }
  
      const data = await prisma.empleada.create({
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
      const empleadaUpdateInput: Prisma.empleadaUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const data = await prisma.empleada.updateMany({
        where: {id },
        data: empleadaUpdateInput
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
      const data = await prisma.empleada.deleteMany({where: {id}});
  
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
