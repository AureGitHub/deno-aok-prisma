import type { Context, RouterContext } from "../../../../dep/deps.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import   prisma  from "../../prisma/db.ts";

import  { userClass } from "./model.ts";


const get= async (ctx: Context) => {

    const users = await prisma.user.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: "success",
      users,
    };

};


const getById= async (ctx: any) => {
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

      const {user, app} = await ctx.request.body().value;
      const {email} = user;
  
     const userExists = await prisma.user.findUnique(
      {where: {email},
      include : {
        apps:{}
      }
    }
      );



      //existe la app

      const appExist = await prisma.app.findFirst({where : {id:app.appId}});

      if(!appExist){
        ctx.response.status = 409;
        ctx.response.body = {
          status: "fail",
          message: "app not exists",
        };
        return;
      }


      //existe el usuario en esa app

      if(userExists && userExists.apps.some(a=> a.appId === app.appId)){
        ctx.response.status = 409;
        ctx.response.body = {
          status: "fail",
          message: "User with that email already exists",
        };
        return;
      }


      // if (userExists) {
      //   ctx.response.status = 409;
      //   ctx.response.body = {
      //     status: "fail",
      //     message: "User with that email already exists",
      //   };
      //   return;
      // }
  


      let userId = userExists ? userExists?.id : 0;

      let userRet = null; 


      if(!userExists){
        const userAdded = await prisma.user.create({
          data: user
        });

        userId = userAdded.id;

        userRet = new userClass(userAdded);

      }
      else{
        userRet = new userClass(userExists);
      }

      

      const dataAdd =  {
        userId ,
        appId : app.appId
      }

      const addUserXapp =  await prisma.userxApp.create(
        {
          data: dataAdd
        }
      );

  
  
      ctx.response.status = 201;
      ctx.response.body = {
        status: "success",
        user :userRet, 
        userxapp : addUserXapp 
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = { status: "error", message: error.message };
      return;
    }
  };


  const update = async (ctx: any) =>  {
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
  

  

  
const del = async (ctx: any) =>  {
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
