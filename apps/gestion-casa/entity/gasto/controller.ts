import { Context, StatusCodes } from "../../../../dep/deps.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import prisma from "../../prisma/db.ts";


const getFilter = (colums : any[]) =>{
  let cadena =  `WHERE 1=1 `;
  colums.forEach(col => {
    if(col['filter']){
      cadena+=` and ${col.prop} like '%${col['filter']}%' `;
    }
  })
  return  cadena ;
}



const getOrderBy = (colums : any[]) =>{
  let cadena =  colums.some(a=>a.order) ? 'order by ' : '';
  colums.forEach(col => {
    if(col['order']){
      cadena+=` ${col.prop} ${col['order']},`;
    }
  })
  return  cadena.substring(0,cadena.length-1) ;
}



const get = async (ctx: any) => {

  let offset =0;
  let limit=0;
  let  count=0;
  let withCache = false;
  


  if(!ctx.state.objPagFilterOrder){



  ctx.state.objPagFilterOrder.pagination = {};
  ctx.state.objPagFilterOrder.pagination.withCache = false;
  ctx.state.objPagFilterOrder.pagination.limit = 10;
  ctx.state.objPagFilterOrder.pagination.offset=0;
  ctx.state.objPagFilterOrder.columns = [];
  ctx.state.objPagFilterOrder.mode = 'C';   // 'C' => Consulta    'P'=>Paginación
  offset *= limit;
  ctx.state.objPagFilterOrder.pagination.count =0;

  }

  withCache=ctx.state.objPagFilterOrder.pagination?.withCache;
  limit = ctx.state.objPagFilterOrder.pagination.limit;
  offset = ctx.state.objPagFilterOrder.pagination.offset;
  const columns = ctx.state.objPagFilterOrder.columns;
  const mode = ctx.state.objPagFilterOrder.mode;   // 'C' => Consulta    'P'=>Paginación
  offset *= limit;
  count = ctx.state.objPagFilterOrder.pagination.count;


  const sqlSelectOnlyCount =` select  to_char(count(*), '9999999')  as total `;

  const sqlSelect = `   
  select g.*,
  TO_CHAR (g.fecha , 'dd/mm/yyyy') as fecha_p,
  t.descripcion  as "t.descripcion", t.color,
  case when t."descripcion" ='servicio' then e.nombre  else g.observacion  end as obs_p,
  pendientecobro 
  `;

  const sqlFrom =`
  from gasto g 
  inner join tipogasto t on g."tipogastoId" = t.id
  left join servicio s on g."servicioId" = s.id 
  left join empleada e on s."empleadaId" =e.id 
  `;
  const orderBydefect = ` order by g.fecha desc  `;


  const strPrismaFilter = getFilter(columns);

  const strOrderBy = getOrderBy(columns);
  

    if(mode == 'C'){
    const countSql =  await prisma.$queryRawUnsafe(sqlSelectOnlyCount + sqlFrom + strPrismaFilter);   
    count = countSql && countSql[0]  ? parseInt(countSql[0].total) : 0;
  }


  const sql_limit =withCache ? `` : `  offset ${offset} limit ${limit}`;

  const  order = strOrderBy ? strOrderBy : orderBydefect;

  
  const data = await prisma.$queryRawUnsafe( sqlSelect + sqlFrom + strPrismaFilter + order + sql_limit );

  ctx.response.status = 201;
  ctx.response.body = { 
    status: StatusCodes.OK,
    data : {data, count },
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
