import { RouterContext, create, Context, decode } from "../../../dep/deps.ts";
import { Prisma } from "../generated/client/deno/edge.ts";
import   prisma  from "../prisma/db.ts";

import  { userClass } from "../models/user.model.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";



const ACCESS_TOKEN_EXPIRES_IN = Deno.env.get('ACCESS_TOKEN_EXPIRES_IN') ;


const secureTokenController =  async (ctx: Context, next) =>  {

  if (!ctx.state.token){
    await next();
    return;
  } 

  let message = "Token session has expired";
  try{
    const [header, payload, signature] = decode(ctx.state.token);  
    const decoded = payload;
    ctx.state.user = decoded['user'];

    const accessTokenExpiresIn=decoded['accessTokenExpiresIn'];

    if(Date.now() > accessTokenExpiresIn){

      const dateExpiresIn = new Date(accessTokenExpiresIn);
      const SessionexpiredIn = `${dateExpiresIn.toLocaleDateString()} ${dateExpiresIn.toLocaleTimeString()}`;

      message = `Token is timed out (${SessionexpiredIn})`;
      ctx.state.user = null;
    }
    else{
      const secure = await giveMeToken(ctx.state.user);
      ctx.state.secure = secure;
    }
    
  }
  catch(ex){
     message = "Token is invalid";
  }

    if (! ctx.state.user) {
      ctx.response.status = 401;
      ctx.response.body = {
        status: "fail",
        message,
      };
      return;
    }

    await next();
};


const giveMeToken = async(user: any) => {

  const key = await crypto.subtle.generateKey(
    { name: "HMAC", hash: "SHA-512" },
    true,
    ["sign", "verify"],
  );

  const accessTokenExpiresIn = Date.now() + ACCESS_TOKEN_EXPIRES_IN * 60 * 1000;
  const token = await create({ alg: "HS512", typ: "JWT" }, {user,accessTokenExpiresIn} , key );



  const dateExpiresIn = new Date(accessTokenExpiresIn);
  const SessionexpiredIn = `${dateExpiresIn.toLocaleDateString()} ${dateExpiresIn.toLocaleTimeString()}`;
  user.SessionexpiredIn = SessionexpiredIn;
  return  {
    user,
    token
  };
}



const signUpUserController = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const user: Prisma.UserCreateInput = await request.body().value;
    const {email} = user;



   const userExists = await prisma.user.findUnique({where: {email}});
    if (userExists) {
      response.status = 409;
      response.body = {
        status: "fail",
        message: "User with that email already exists",
      };
      return;
    }

    const userAdded = await prisma.user.create({
      data: user
    });

    let userRet = new userClass(userAdded);


    response.status = 201;
    response.body = {
      status: "success",
      userRet,
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};


const loginUserController = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { email, password }: { email: string; password: string } =
      await request.body().value;

      const user = await prisma.user.findFirst(
        {where: {email,password }, 
        include : {
          apps: {include : {app : true}}          
        }
      });


    if (!user) {
      response.status = 401;
      response.body = {
        status: "fail",
        message: "Invalid email or password",
      };
      return;
    }

    if (user.id==0) {
      response.status = 401;
      response.body = {
        status: "fail",
        message: "No tiene aplicaciones asociadas",
      };
      return;
    }

    let userRet = new userClass(user);

    const key = await crypto.subtle.generateKey(
      { name: "HMAC", hash: "SHA-512" },
      true,
      ["sign", "verify"],
    );

    const secure = await giveMeToken(userRet);

    response.status = 200;
    response.body = { status: "success", secure };
  } catch (error) {
    response.status = 500;
    response.body = { status: "error", message: error.message };
    return;
  }
};



const logoutController = (ctx) => {
 
  ctx.state.secure = null;
  ctx.state.token = null;

  ctx.response.status = 200;
  ctx.response.body = { status: "success" };
};


export default {
  signUpUserController,
  loginUserController,
  logoutController,
  secureTokenController
};
