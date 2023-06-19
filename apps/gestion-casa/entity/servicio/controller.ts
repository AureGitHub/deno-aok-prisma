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


const getPresent= async (ctx: any) => {

  const u=new URL(ctx.request.url);

  const pagado =u.searchParams.get('pagado'); 


  let where = Prisma.sql``;

  switch(pagado){
    case 'n' : where = Prisma.sql`where s."pagado" = false`;
    break;
    case 's' : where = Prisma.sql`where s."pagado" = true`;
    break;
    case 't' : where = Prisma.sql``;
    break;
  }


  


  const data  = await prisma.$queryRaw<any[]> `
  select 
      s.id , 
      TO_CHAR (s.fecha , 'dd/mm/yyyy') as fecha ,
      TO_CHAR (s."horaInicio" , 'HH24:MI') as horaInicio ,
      TO_CHAR (s."horaFin" , 'HH24:MI') as horaFin , 
      e.nombre as nombreEmpleada, 
      case when s."suplLevantar" then 'Si' else 'No' end as suplLevantar , 
      case when s."pagado" then 'Si' else 'No' end as pagado,
      round( CAST(float8 (Extract(epoch FROM (s."horaFin" - s."horaInicio")) / 3600) as numeric), 2) AS horas,      
      (Extract(epoch FROM (s."horaFin" - s."horaInicio")) / 60) * (8.0/60) +  case when s."suplLevantar" then 2 else 0 end as euros
      from servicio s 
      inner join empleada e on s."empleadaId" = e.id 
      ${where }
      order by s.fecha  desc

  `;
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};


const getResumenNoPagado= async (ctx: any) => {

  const data  = await prisma.$queryRaw<any[]> `
  select  
  e.id as empleadaid, 
e.nombre as nombreEmpleada,
sum(round( CAST(float8 (Extract(epoch FROM (s."horaFin" - s."horaInicio")) / 3600) as numeric), 2)) AS horas,
sum((Extract(epoch FROM (s."horaFin" - s."horaInicio")) / 60) * (8.0/60) +  case when s."suplLevantar" then 2 else 0 end) as euros
from servicio s 
inner join empleada e on s."empleadaId" = e.id 
where s.pagado = false
group by empleadaid,nombreEmpleada

  `;
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



  const upServPagado = async (ctx: any) =>  {
    try {
  
  
      const  empleadaId  = Number(ctx?.params?.empleadaid);
      
      const data = await prisma.servicio.updateMany({
        where: {empleadaId , pagado : false  },
        data: {pagado: true}
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
    del,
    getPresent,
    getResumenNoPagado,
    upServPagado
};
