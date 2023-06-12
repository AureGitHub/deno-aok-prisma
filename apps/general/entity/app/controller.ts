import { Context , StatusCodes} from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";


const get= async (ctx: Context) => {

    const apps = await prisma.app.findMany();
    ctx.response.status = 200;
    ctx.response.body = {
      status: StatusCodes.OK,
      data: apps,
    };

};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const app = await prisma.app.findFirst({where: {id}});

    ctx.response.status = 200;
    ctx.response.body = {
      status: StatusCodes.OK,
      data:  app,
    };

};


const add = async (ctx: Context) => {
    try {
      const app: Prisma.AppCreateInput = await ctx.request.body().value;
      const {descripcion} = app;
  
     const appExists = await prisma.app.findUnique({where: {descripcion}});
      if (appExists) {
        ctx.response.status = 409;
        ctx.response.body = {
          status: StatusCodes.CONFLICT,
          message: "App with that email already exists",
        };
        return;
      }
  
      const appCreate = await prisma.app.create({
        data: app
      });
  
  
  
      ctx.response.status = 201;
      ctx.response.body = {
        status: StatusCodes.OK,
        app: appCreate,
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
      const appUpdateInput: Prisma.AppUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const app = await prisma.app.updateMany({
        where: {id },
        data: appUpdateInput
      })
  
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: StatusCodes.OK,
       data: app,
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
      const app = await prisma.app.deleteMany({where: {id}});
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: StatusCodes.OK,
        data: app,
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
