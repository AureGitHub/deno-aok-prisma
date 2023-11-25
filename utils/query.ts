import { StatusCodes } from "../dep/deps.ts";

export const getFilter = (colums : any[]) =>{
    let cadena =  `WHERE 1=1 `;
    colums.forEach(col => {
      if(col['filter']){
        cadena+=` and ${col.prop} like '%${col['filter']}%' `;
      }

      if(col['filterInit']){
        cadena+=` and ${col['filterInit']} `;
      }

    })
    
    return  cadena ;
  }
  
  
  
  export   const getOrderBy = (colums : any[]) =>{
    let cadena =  colums.some(a=>a.order || a.OrderInit)  ? 'order by ' : '';
    colums.forEach(col => {
      if(col['order']){
        cadena+=` ${col.prop} ${col['order']},`;
      }

      if(col['OrderInit']){
        cadena+=` ${col.prop} ${col['OrderInit']},`;
      }

    })
    return  cadena.substring(0,cadena.length-1) ;
  } 


  export const execute_query = async (ctx: any, prisma: any, sqlSelect : string, sqlFrom :string, orderBydefect : string) => {
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


  const strPrismaFilter = getFilter(columns);

  const strOrderBy = getOrderBy(columns);
  

    if(mode == 'C'){
    const countSql =  await prisma.$queryRawUnsafe(sqlSelectOnlyCount + sqlFrom + strPrismaFilter);   
    count = countSql &&   countSql[0]  ? parseInt(countSql[0].total) : 0;
  }


  const sql_limit =withCache ? `` : `  offset ${offset} limit ${limit}`;

  const  order = strOrderBy ? strOrderBy : orderBydefect;

  
   const data = await prisma.$queryRawUnsafe( sqlSelect + sqlFrom + strPrismaFilter + order + sql_limit );
   ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data, count },
   };

  }
