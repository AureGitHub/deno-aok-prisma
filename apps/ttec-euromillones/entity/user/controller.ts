import { RouterContext, StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import { userClass } from "../../models/user.model.ts";
import   prisma  from "../../prisma/db.ts";

import authController  from "../../../general/entity/auth/controller.ts"

import {Estado} from "../../../../utils/enums.ts"

import { SmtpClient } from "https://deno.land/x/smtp/mod.ts";




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
        message: "Usuario o password incorrecta!!",
      };
      return;
    }


    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado) ) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador",
      };
      return;
    }


    if (user && user.estadoId == Estado.cambiar_pass) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "Password bloqueda. Debe cambiar su password",
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



const getCodeResetPass= async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { email }: { email: string; } =
      await request.body().value;

      const user = await prisma.user.findFirst(
        {where: {email }
      });



    if (!user) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "correo no válido!!",
      };
      return;
    }


    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado) ) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador",
      };
      return;
    }


    // generar un uuid y guardarlo en una tabla... codigosOperaciones   (tipo 1 => condigo para reset correo)
    // userId, codigo, fecha caducidad?


    // una vez generado, se envia correo a usuario

    const client = new SmtpClient();

    


    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: "aure.euromillones@gmail.com",
      password: "jas11jas11",
    });
    
    await client.send({
      from: "aure.euromillones@gmail.com", // Your Email address
      to: "aure.desande@gmail.com", // Email address of the destination
      subject: "Mail Title",
      content: "Mail Content，maybe HTML",
    });
    
    await client.close();


    response.status = 200;
    response.body = { 
      status:StatusCodes.OK,
      data: {code : true} };
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
      data : {data, count : data.length },
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
  
  getCodeResetPass,
  login,    
  get,
  getById,
  add, 
  update, 
  del
};
