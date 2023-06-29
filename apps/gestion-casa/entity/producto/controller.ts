import { StatusCodes } from "../../../../dep/deps.ts";
import   prisma  from "../../prisma/db.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";


const get= async (ctx: any) => {
  const data = await prisma.$queryRaw<any[]> ` 
     SELECT * FROM producto p 
     where p.id not in 
    (select lc."productoId"  from "ListaCompra" lc)
    `;

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.producto.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};



const add = async (ctx: any) => {
  try {
    const producto: Prisma.productoCreateInput = await ctx.request.body().value;
    const {descripcion} = producto;

   const productoExists = await prisma.producto.findUnique({where: {descripcion}});
    if (productoExists) {
      ctx.response.status = 409;
      ctx.response.body = {
        status: StatusCodes.CONFLICT,
        message: "product with that description already exists",
      };
      return;
    }

    const data = await prisma.producto.create({
      data: producto
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
    const productoUpdateInput: Prisma.productoUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.tipogasto.updateMany({
      where: {id },
      data: productoUpdateInput
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
    const data = await prisma.producto.deleteMany({where: {id}});

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