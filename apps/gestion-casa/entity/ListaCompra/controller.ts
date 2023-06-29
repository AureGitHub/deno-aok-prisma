import { StatusCodes } from "../../../../dep/deps.ts";
import   prisma  from "../../prisma/db.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";


const get= async (ctx: any) => {

  const data = await prisma.$queryRaw<any[]> ` 
select lc.*,descripcion
  from "ListaCompra" lc 
  inner join producto p on lc."productoId" =p.id   
`;

ctx.response.status = 201;
ctx.response.body = {
status: StatusCodes.OK,
data,
};

};






const add = async (ctx: any) => {
  try {
    const producto: Prisma.ListaCompraCreateInput = await ctx.request.body().value;

    const data = await prisma.listaCompra.create({
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





const del = async (ctx: any) =>  {
  try {

    const  productoId  = Number(ctx?.params?.id);
    const data = await prisma.listaCompra.deleteMany({where: {productoId}});

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