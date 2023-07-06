import { StatusCodes } from "../../../../dep/deps.ts";
import   prisma  from "../../prisma/db.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";


const get= async (ctx: any) => {

    const data = await prisma.configuracion.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};

const getById= async (ctx: any) => {
    const  key  = ctx?.params?.key;
    const data = await prisma.configuracion.findFirst({where: {key}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};



const add = async (ctx: any) => {
  try {
    const configuracionAdd: Prisma.configuracionCreateInput = await ctx.request.body().value;
    const {key} = configuracionAdd;

   const configuracionExists = await prisma.configuracion.findUnique({where: {key}});
    if (configuracionExists) {
      ctx.response.status = 409;
      ctx.response.body = {
        status: StatusCodes.CONFLICT,
        message: "key  already exists",
      };
      return;
    }

    const data = await prisma.configuracion.create({
      data: configuracionAdd
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


    const  key  = ctx?.params?.key;
    const configuracionUpdateInput: Prisma.configuracionUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.configuracion.updateMany({
      where: {key },
      data: configuracionUpdateInput
    })

    if(data?.count == 0){
      ctx.response.status = 409;
      ctx.response.body = {
        status: StatusCodes.CONFLICT,
        message: "No existe el elemento a modificar",
      };
      return;
    }


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

    const  key  = ctx?.params?.key;
    const data = await prisma.configuracion.deleteMany({where: {key}});

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