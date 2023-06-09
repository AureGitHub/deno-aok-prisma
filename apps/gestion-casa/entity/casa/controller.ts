import type { Context } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";



const get= async (ctx: Context) => {

    const users = await prisma.casa.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: "success",
      users,
    };

};


const getById= async (ctx: Context) => {
    const  id  = Number(ctx?.params?.id);
    const user = await prisma.casa.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: "success",
      user,
    };

};


const add = async (ctx: Context) => {
    try {
      const user: Prisma.casaCreateInput = await ctx.request.body().value;
      const {nombre} = user;
  
     const userExists = await prisma.casa.findUnique({where: {nombre}});
      if (userExists) {
        ctx.response.status = 409;
        ctx.response.body = {
          status: "fail",
          message: "Casa with that email already exists",
        };
        return;
      }
  
      const casa = await prisma.casa.create({
        data: user
      });
  
  
  
      ctx.response.status = 201;
      ctx.response.body = {
        status: "success",
        casa,
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = { status: "error", message: error.message };
      return;
    }
  };


  const update = async (ctx: Context) =>  {
    try {
  
  
      const  id  = Number(ctx?.params?.id);
      const userUpdateInput: Prisma.casaUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const casa = await prisma.casa.updateMany({
        where: {id },
        data: userUpdateInput
      })
  
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: "success",
        casa,
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        status: "success",
        message: error.message,
      };
      return;
    }
  };
  

  

  
const del = async (ctx: Context) =>  {
    try {
  
      const  id  = Number(ctx?.params?.id);
      const casa = await prisma.casa.deleteMany({where: {id}});
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: "success",
        casa,
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        status: "success",
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
