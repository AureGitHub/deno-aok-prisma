// deno-lint-ignore-file no-explicit-any
import { RouterContext, StatusCodes } from "../../../../dep/deps.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import { userClass } from "../../models/user.model.ts";
import prisma from "../../prisma/db.ts";

import authController from "../../../general/entity/auth/controller.ts"

import { Estado, UserXMovimientoXTipo } from "../../enums.ts"
import { sendEmail } from "../../../../utils/sendEmail.ts";
import { execute_query} from "../../../../utils/query.ts";



const get = async (ctx: any) => {

  const sqlSelect = ` select * `;
  const sqlFrom = ` from "User"  `;
  const orderBydefect = ``;
  const result = await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: { data: result.data, count: result.count },
  };

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.user.findFirst({ where: { id } });

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data,
  };

};



const add = async (ctx: any) => {
  try {
    const newItem: Prisma.UserCreateInput = await ctx.request.body().value;
    const { email } = newItem;

    const empleadaExists = await prisma.user.findUnique({ where: { email } });
    if (empleadaExists) {
      ctx.response.status = 409;
      ctx.response.body = {
        status: StatusCodes.CONFLICT,
        message: "item already exists",
      };
      return;
    }


    const dataMAx = await prisma.user.aggregate({
      _max: {
        id: true
      }
    });

    newItem['id'] = dataMAx._max.id + 1;  //mejor usar una secuencia  AUREMEJORAS

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


const update = async (ctx: any) => {
  try {


    const id = Number(ctx?.params?.id);
    const itemUpdateInput: Prisma.UserUpdateInput = await ctx.request.body().value;
    //const {id}  = await request.body().value;

    const data = await prisma.user.updateMany({
      where: { id },
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




const del = async (ctx: any) => {
  try {

    const id = Number(ctx?.params?.id);
    const data = await prisma.user.deleteMany({ where: { id } });

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


const login = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { email, password }: { email: string; password: string } =
      await request.body().value;

    const user = await prisma.user.findFirst(
      {
        where: { email, password }
      });



    if (!user) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "Usuario o password incorrecta!!",
      };
      return;
    }


    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado)) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador",
      };
      return;
    }


    if (user && user.estadoId == Estado.cambiar_pass) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
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
      status: StatusCodes.OK,
      data: secure
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
    return;
  }
};




const addSaldo = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { id, importe, bizum } = await request.body().value;

    const user = await prisma.user.findFirst(
      {
        where: { id }
      });


    if (user && user.estadoId == Estado.baja) {
      response.status = 500;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "Usuario dado de baja. Póngase en contacto con el administrador",
      };
      return;
    }



    let saldo = user ? user.saldo.toNumber() : 0;

    saldo += importe;

    const userId = user ? user.id : 0;

    const updateUser = prisma.user.updateMany({
      where: { id: user?.id },
      data: {
        saldo
      }
    });


    const createMovimiento = prisma.userXMovimiento.create({
      data: {
        tipoId: UserXMovimientoXTipo.ingreso,
        importe,
        userId
      }
    }

    );

    if (bizum) {

      const createBizum = prisma.userXBizum.create({
        data: {
          importe,
          userId,
          movimientoId: (await createMovimiento).id  //esto hace que cree el movimiento
        }
      }

      );

      await prisma.$transaction([updateUser, createBizum]);

    }
    else {
      await prisma.$transaction([updateUser, createMovimiento]);
    }







    //Añadir a movimientos user
    // si es bizum, añadir a la tabla de bizum

    response.status = 200;
    response.body = {
      status: StatusCodes.OK,
      data: { code: true }
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
    return;
  }
};



const reserPassByCode = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { code, password }: { code: string; password: string; } =
      await request.body().value;

    const codeSecure = await prisma.codeSecure.findFirst(
      {
        where: { code }
      });


    if (!codeSecure) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "código no válido!!",
      };
      return;
    }

    const user = await prisma.user.findFirst(
      {
        where: { id: codeSecure.userId }
      });

    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado)) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador",
      };
      return;
    }


    await prisma.user.updateMany({
      where: { id: user?.id },
      data: {
        password,
        estadoId: Estado.activo
      }
    })


    //habría que hacer como el login....
    //o en el client me voy a la página de login (casi mejor esto..)


    response.status = 200;
    response.body = {
      status: StatusCodes.OK,
      data: { code: true }
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };
    return;
  }
};



const getCodeResetPass = async ({
  request,
  response,
}: RouterContext<string>) => {
  try {
    const { email }: { email: string; } =
      await request.body().value;

    const user = await prisma.user.findFirst(
      {
        where: { email }
      });



    if (!user) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "correo no válido!!",
      };
      return;
    }


    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado)) {
      response.status = 200;
      response.body = {
        status: StatusCodes.CONFLICT,
        message: "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador",
      };
      return;
    }


    // generar un uuid y guardarlo en una tabla... codigosOperaciones   (tipo 1 => condigo para reset correo)
    // userId, codigo, fecha caducidad?
    // una vez generado, se envia correo a usuario


    const myUUID = crypto.randomUUID();

    await prisma.codeSecure.create({
      data: {
        code: myUUID,
        type: 1,
        userId: user.id
      }
    })

    const subject = "TTEC-euromillones. Su codigo para resetear la password";

    const bodyHtml = `<div>Prueba final.Su codigo para resetear la password</div><div><span style='font-size: 15px;color : green'>${myUUID}</span></div>`;

    try {
      const sender_email = await sendEmail(['aure.desande@gmail.com', 'jdesande@tragsa.es'], subject, bodyHtml);

      if (!sender_email.enviado) {
        throw new Error(sender_email.message);
      }


    }
    catch (error) {
      response.status = 500;
      console.log(error);
      response.body = { status: StatusCodes.INTERNAL_SERVER_ERROR, message: 'enviando email => ' + error.message };
      return;
    }



    response.status = 200;
    response.body = {
      status: StatusCodes.OK,
      data: { code: true }
    };
  } catch (error) {
    response.status = 500;
    response.body = { status: StatusCodes.INTERNAL_SERVER_ERROR, message: error.message };

  }
};






export default {
  addSaldo,
  reserPassByCode,
  getCodeResetPass,
  login,
  get,
  getById,
  add,
  update,
  del
};
