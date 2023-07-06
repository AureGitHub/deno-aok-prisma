import { Context, StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";


const  toHoursAndMinutes = (totalMinutes: number) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return { hours, minutes };
}

const getHoras = (shoraInicio : string, shoraFin: string)=>{
  const horaInicio = new Date(shoraInicio);
  const horaFin = new Date(shoraFin);
  const resta = (horaFin.getTime() - horaInicio.getTime()) / 60000;
  return toHoursAndMinutes(resta);
}

const getImporte = async (shoraInicio : string, shoraFin: string, suplLevantar : boolean)=>{
  const tiempo = getHoras(shoraInicio,shoraFin );
  //{ "hours": 1, "minutes": 45}

  
const confprecioHora = await prisma.configuracion.findFirst({where : {key : 'precio-hora'}});
const confprecionSuplLevantar = await prisma.configuracion.findFirst({where : {key : 'suplemento-levantar'}});
const  precioHora = confprecioHora?.value ? parseFloat(confprecioHora.value) : 0.0;
const  precionSuplLevantar = confprecionSuplLevantar?.value ?parseFloat(confprecionSuplLevantar?.value) : 0.0;

  let importe = suplLevantar ? precionSuplLevantar : 0;
  //horas
  importe+= tiempo.hours * precioHora;
  //minutos
  importe+= (tiempo.minutes * precioHora) / 60;

  return {
    tiempo, importe
  }

}

const getIdTipoGasto = async () => {
  const tipogasto = await prisma.tipogasto.findFirst({where : {descripcion : 'servicio'}});
  return tipogasto ? tipogasto.id : null;
}


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


  // round( CAST(float8 (Extract(epoch FROM (s."horaFin" - s."horaInicio")) / 3600) as numeric), 2) AS horas,      
  // (Extract(epoch FROM (s."horaFin" - s."horaInicio")) / 60) * (8.0/60) +  case when s."suplLevantar" then 2 else 0 end as euros


  const data  = await prisma.$queryRaw<any[]> `
  select 
      s.id , 
      TO_CHAR (s.fecha , 'dd/mm/yyyy') as fecha ,
      TO_CHAR (s."horaInicio" , 'HH24:MI') as horaInicio ,
      TO_CHAR (s."horaFin" , 'HH24:MI') as horaFin , 
      e.nombre as nombreEmpleada, 
      s."suplLevantar", 
      s."pagado" ,
      CONCAT(s.horas,',',s.minutos)  AS horas,  
      importe    as euros
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
      const servicioToAdd: Prisma.servicioCreateInput = await ctx.request.body().value;
      
  
      const horas = await getImporte(servicioToAdd.horaInicio, servicioToAdd.horaFin, servicioToAdd.suplLevantar);

     
      servicioToAdd.horas = horas.tiempo.hours;
      servicioToAdd.minutos = horas.tiempo.minutes;
      servicioToAdd.importe = horas.importe;

      const data = await prisma.servicio.create({
        data: servicioToAdd,        
      });

      if(servicioToAdd.pagado){
        // creo  gasto del servicio
        const tipogastoId = await getIdTipoGasto();
        if(tipogastoId){
          await prisma.gasto.create({
            data : {
               servicioId : data.id,
               fecha : data.fecha,
               tipogastoId ,
               importe : servicioToAdd.importe
            }
          })        

        }
          
      };

  
  
  
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

      //obtengo los Id que se van a poner como pagados para crear los gastos
      const lstIds = await prisma.servicio.findMany({
        where: {empleadaId , pagado : false  },
      }
      );
      
      const data = await prisma.servicio.updateMany({
        where: {empleadaId , pagado : false  },
        data: {pagado: true}
      })

      lstIds.forEach(async serv=> {
        const tipogastoId = await getIdTipoGasto();
        if(tipogastoId){
          await prisma.gasto.create({
            data : {
               servicioId : serv.id,
               fecha : serv.fecha,
               tipogastoId,
               importe : serv.importe
            }
          })     

        }
        
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
  

      const horas = await getImporte(servicioUpdateInput.horaInicio, servicioUpdateInput.horaFin, servicioUpdateInput.suplLevantar);
      servicioUpdateInput.horas = horas.tiempo.hours;
      servicioUpdateInput.minutos = horas.tiempo.minutes;
      servicioUpdateInput.importe = horas.importe;

      const data = await prisma.servicio.updateMany({
        where: {id },
        data: servicioUpdateInput
      });

      // borro el gesto... si existía
      await prisma.gasto.deleteMany({where: {servicioId :id }});

      if(servicioUpdateInput.pagado){
        // creo  gasto del servicio
        const servicio = await prisma.servicio.findUnique({where: {id}});

        if(servicio){
          const tipogastoId = await getIdTipoGasto();
          if(tipogastoId){
            await prisma.gasto.create({
              data : {
                 servicioId : servicio.id,
                 fecha : servicio.fecha,
                 tipogastoId,
                 importe : servicio.importe
              }
            })     
          }
             
        }
          
      };


  
  
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


      //primero borro sus gastos asociados... si los tuviese...
      await prisma.gasto.deleteMany({where : {servicioId : id}});

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
