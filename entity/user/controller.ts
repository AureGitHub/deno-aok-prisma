import type { Context, RouterContext } from "../../dep/deps.ts";
import  { prisma, Prisma } from "../../dep/deps.ts";

import  { userClass } from "./model.ts";


const get= async (ctx: Context) => {

    const users = await prisma.user.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: "success",
      users,
    };

};


const getById= async (ctx: Context) => {
    const  id  = Number(ctx?.params?.id);
    const user = await prisma.user.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: "success",
      user,
    };

};


const add = async (ctx: Context) => {
    try {
      const user: Prisma.UserCreateInput = await ctx.request.body().value;
      const {email} = user;
  
     const userExists = await prisma.user.findUnique({where: {email}});
      if (userExists) {
        ctx.response.status = 409;
        ctx.response.body = {
          status: "fail",
          message: "User with that email already exists",
        };
        return;
      }
  
      const userAdded = await prisma.user.create({
        data: user
      });
  
      let userRet = new userClass(userAdded);
  
  
      ctx.response.status = 201;
      ctx.response.body = {
        status: "success",
        userRet,
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
      const userUpdateInput: Prisma.UserUpdateInput = await ctx.request.body().value;
      //const {id}  = await request.body().value;
  
      const user = await prisma.user.updateMany({
        where: {id },
        data: userUpdateInput
      })
  
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: "success",
        user,
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
      const deleteUsers = await prisma.user.deleteMany({where: {id}});
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: "success",
        deleteUsers,
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




const getMe = async ({ state, response }: RouterContext<string>) => {
  try {

    const id = parseInt(state.user.id);

    const user = await prisma.user.findUnique({where: {id}});

    let userRet = new userClass(user);
    


    response.status = 200;
    response.body = {
      status: "success",
      userRet,
    };
  } catch (error) {
    response.status = 500;
    response.body = {
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
    del, 
    getMe 
};
