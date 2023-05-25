import type { Context, RouterContext } from "../dep/deps.ts";
import  { prisma, Prisma } from "../dep/deps.ts";

import  { userClass } from "../dep/deps.ts";



const getMeController = async ({ state, response }: RouterContext<string>) => {
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


const getUpdateController = async (ctx: Context) =>  {
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


const getDeleteController = async (ctx: Context) =>  {
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






export default { getMeController, getUpdateController, getDeleteController };
