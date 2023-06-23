import { StatusCodes } from "../../../../dep/deps.ts";
import   prisma  from "../../prisma/db.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";


const get= async (ctx: any) => {

    const data = await prisma.tipogasto.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};

const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.tipogasto.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};



const add = async (ctx: any) => {
  try {
    const tipo: Prisma.tipogastoCreateInput = await ctx.request.body().value;
    const {descripcion} = tipo;

   const tipoExists = await prisma.tipogasto.findUnique({where: {descripcion}});
    if (tipoExists) {
      ctx.response.status = 409;
      ctx.response.body = {
        status: StatusCodes.CONFLICT,
        message: "tipo with that description already exists",
      };
      return;
    }

    const data = await prisma.tipogasto.create({
      data: tipo
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
    const tipogastoUpdateInput: Prisma.tipogastoUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.tipogasto.updateMany({
      where: {id },
      data: tipogastoUpdateInput
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
    const data = await prisma.tipogasto.deleteMany({where: {id}});

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