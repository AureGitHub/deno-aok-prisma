import { StatusCodes } from "../../../../dep/deps.ts";
import { getFilter, getOrderBy } from "../../../../utils/query.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: any) => {

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
  select 
u."name" as dequien,
ux.importe,
ux."createdAt"  as fecha,
ux.pendiente 
  `;

  const sqlFrom =` 
  from "UserXBizum" ux 
  inner join "User" u on u.id = ux."userId"   `;
  const orderBydefect = ``;


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
    data : {data, count },
  };

};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.userXBizum.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const add = async (ctx: any) => {
    try {
      const newItem: Prisma.UserXBizumCreateInput = await ctx.request.body().value;

  
      const data = await prisma.userXBizum.create({
        data: newItem
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
      const itemUpdateInput: Prisma.UserXBizumUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const data = await prisma.userXBizum.updateMany({
        where: {id },
        data: itemUpdateInput
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
      const data = await prisma.userXBizum.deleteMany({where: {id}});
  
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
