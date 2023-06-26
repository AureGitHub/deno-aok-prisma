import { Context, StatusCodes } from "../../../../dep/deps.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import prisma from "../../prisma/db.ts";



const get = async (ctx: any) => {



  const data = await prisma.$queryRaw<any[]> ` 
select g.*,
TO_CHAR (g.fecha , 'dd/mm/yyyy') as fecha_p,
t.descripcion, t.color,
case when g."tipogastoId" =1 then e.nombre  else g.observacion  end as obs_p,
pendientecobro
from gasto g 
inner join tipogasto t on g."tipogastoId" = t.id
left join servicio s on g."servicioId" = s.id 
left join empleada e on s."empleadaId" =e.id 
  
    `;

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.gasto.findFirst({ where: { id } });

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};


const add = async (ctx: any) => {
  try {
    const empleada: Prisma.gastoCreateInput = await ctx.request.body().value;

    const data = await prisma.gasto.create({
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


const update = async (ctx: any) => {
  try {


    const id = Number(ctx?.params?.id);
    const dataUpdateInput: Prisma.gastoUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.gasto.updateMany({
      where: { id },
      data: dataUpdateInput
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





const del = async (ctx: any) => {
  try {

    const id = Number(ctx?.params?.id);
    const data = await prisma.gasto.deleteMany({ where: { id } });

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
