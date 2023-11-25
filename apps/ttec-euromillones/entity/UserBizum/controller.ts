// deno-lint-ignore-file no-explicit-any
import { execute_query } from "../../../../utils/query.ts";
import { statusError, statusOK } from "../../../../utils/status.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import prisma from "../../prisma/db.ts";



const get = async (ctx: any) => {

  const sqlSelect = `   
  select 
    ux.id as id,
    u."name" as dequien,
    ux.importe,
    ux."createdAt"  as fecha,
    ux.pendiente 
  `;

  const sqlFrom = ` 
  from "UserXBizum" ux 
  inner join "User" u on u.id = ux."userId"   `;
  const orderBydefect = ``;
  await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.userXBizum.findFirst({ where: { id } });

  statusOK(ctx,data);    

};


const add = async (ctx: any) => {
  try {
    const newItem: Prisma.UserXBizumCreateInput = await ctx.request.body().value;


    const data = await prisma.userXBizum.create({
      data: newItem
    });

    statusOK(ctx,data);    
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};


const update = async (ctx: any) => {
  try {


    const id = Number(ctx?.params?.id);
    const itemUpdateInput: Prisma.UserXBizumUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.userXBizum.updateMany({
      where: { id },
      data: itemUpdateInput
    })


    statusOK(ctx,data);    
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};

const updatependientesAll = async (ctx: any) => {
  try {

    const data = await prisma.userXBizum.updateMany({
      where: { pendiente: true },
      data: { pendiente: false }
    })

    statusOK(ctx,data);    
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};




const del = async (ctx: any) => {
  try {

    const id = Number(ctx?.params?.id);
    const data = await prisma.userXBizum.deleteMany({ where: { id } });

    statusOK(ctx,data);    
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};


export default {
  get,
  getById,
  add,
  update,
  updatependientesAll,
  del
};
