import { RouterContext, StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import { userClass } from "../../models/user.model.ts";
import   prisma  from "../../prisma/db.ts";

import authController  from "../../../general/entity/auth/controller.ts"






const login = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { email, password }: { email: string; password: string } =
      await request.body().value;

      const user = await prisma.user.findFirst(
        {where: {email,password }
      });



    if (!user) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "Invalid email or password",
      };
      return;
    }


    let userRet = new userClass(user);

    const key = await crypto.subtle.generateKey(
      { name: "HMAC", hash: "SHA-512" },
      true,
      ["sign", "verify"],
    );

    const secure = await authController.giveMeToken(userRet);

    response.status = 200;
    response.body = { 
      status:StatusCodes.OK,
      data: secure };
  } catch (error) {
    response.status = 500;
    response.body = {  status:StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
    return;
  }
};



const get= async (ctx: any) => {

    const data = await prisma.user.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.user.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};


const add = async (ctx: any) => {
    try {
      const newItem: Prisma.UserCreateInput = await ctx.request.body().value;
      const {email} = newItem;
  
     const empleadaExists = await prisma.user.findUnique({where: {email}});
      if (empleadaExists) {
        ctx.response.status = 409;
        ctx.response.body = {
          status: StatusCodes.CONFLICT,
          message: "item already exists",
        };
        return;
      }
  

      let dataMAx = await prisma.user.aggregate({        
          _max: {
             id: true
               }
      });

      // newItem.id = data;

      const data = await prisma.user.create({
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
      const itemUpdateInput: Prisma.UserUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const data = await prisma.user.updateMany({
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
      const data = await prisma.user.deleteMany({where: {id}});
  
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
    login,
    get,
    getById,
    add, 
    update, 
    del
};
