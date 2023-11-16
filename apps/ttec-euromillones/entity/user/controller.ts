import { RouterContext, StatusCodes } from "../../../../dep/deps.ts";
import  { Prisma } from "../../generated/client/deno/edge.ts";
import { userClass } from "../../models/user.model.ts";
import   prisma  from "../../prisma/db.ts";

import authController  from "../../../general/entity/auth/controller.ts"

import {Estado} from "../../../../utils/enums.ts"
import { sendEmail_Post } from "../../../../utils/sendEmail.ts";

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


const reserPassByCode =  async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { code, password }: { code: string; password: string;} =
      await request.body().value;

      const codeSecure = await prisma.codeSecure.findFirst(
        {where: {code }
      });


    if (!codeSecure) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "código no válido!!",
      };
      return;
    }

    const user =  await prisma.user.findFirst(
      {where: {id : codeSecure.userId }
    });

    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado) ) {
      response.status = 200;
      response.body = {
        status:StatusCodes.CONFLICT,
        message: "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador",
      };
      return;
    }


    await prisma.user.updateMany({
      where: {id: user?.id },
      data: {
        password,
        estadoId : Estado.activo
      }
    })


    //habría que hacer como el login....
    //o en el client me voy a la página de login (casi mejor esto..)


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


const myUUID = crypto.randomUUID();

  await prisma.codeSecure.create({
    data : {
      code : myUUID,
      type : 1,
      userId : user.id
    }
  })

  const subject ="TTEC-euromillones. Su codigo para resetear la password";

  const bodyHtml =  `<div>Su codigo para resetear la password</div><div><span>${myUUID}</span></div>`;

    try{
      await sendEmail_Post(['aure.desande@gmail.com','jdesande@tragsa.es'],subject,bodyHtml);
    }
    catch(error){
      response.status = 500;
      console.log(error);
      response.body = {  status:StatusCodes.INTERNAL_SERVER_ERROR, message: 'enviando email => ' + error.message };
      return;
    }
  


    response.status = 200;
    response.body = { 
      status:StatusCodes.OK,
      data: {code : true} };
  } catch (error) {
    response.status = 500;
    response.body = {  status:StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
   
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
  reserPassByCode,
  getCodeResetPass,
  login,    
  get,
  getById,
  add, 
  update, 
  del
};
