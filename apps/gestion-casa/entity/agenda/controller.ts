import { Context, StatusCodes } from "../../../../dep/deps.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import prisma from "../../prisma/db.ts";



const get = async (ctx: any) => {



  const data = await prisma.$queryRaw<any[]> `


   select a.*,
   case when a.fecha is null  then tu.fecha else a.fecha end as fechaG,
 TO_CHAR (a.fecha , 'dd/mm/yyyy') as fecha_p,
 t.descripcion, t.color,
 tu.quien as turno
 from agenda a
 inner join tipoagenda t on a."tipoagendaId" = t.id
 full outer join turno tu on a.fecha =tu.fecha 
 order by tu.fecha 
  
    `;

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.agenda.findFirst({ where: { id } });

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};


const add = async (ctx: any) => {
  try {
    const empleada: Prisma.agendaCreateInput = await ctx.request.body().value;

    const data = await prisma.agenda.create({
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
    const dataUpdateInput: Prisma.agendaUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.agenda.updateMany({
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
    const data = await prisma.agenda.deleteMany({ where: { id } });

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
