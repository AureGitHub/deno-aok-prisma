// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../../dep/deps.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import { userClass } from "../../models/user.model.ts";
import prisma from "../../prisma/db.ts";

import authController from "../../../general/entity/auth/controller.ts"

import { Estado, UserXMovimientoXTipo } from "../../enums.ts"
import { sendEmail } from "../../../../utils/sendEmail.ts";
import { execute_query} from "../../../../utils/query.ts";
import { setStatus, statusError, statusOK } from "../../../../utils/status.ts";



const get = async (ctx: any) => {

  const sqlSelect = ` select * `;
  const sqlFrom = ` from "User"  `;
  const orderBydefect = ``;
  await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);
 

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.user.findFirst({ where: { id } });
  statusOK(ctx,data);

};



const add = async (ctx: any) => {
  try {
    const newItem: Prisma.UserCreateInput = await ctx.request.body().value;
    const { email } = newItem;

    const empleadaExists = await prisma.user.findUnique({ where: { email } });
    if (empleadaExists) {
      setStatus(ctx,409,StatusCodes.CONFLICT,'usuario ya existe!')
      return;
    }


    const dataMAx = await prisma.user.aggregate({_max: {id: true}});
    const max = dataMAx._max.id ? dataMAx._max.id : 0;
    newItem['id'] = max+ 1;  //mejor usar una secuencia  AUREMEJORAS

    const data = await prisma.user.create({data: newItem});

    statusOK(ctx,data);    
  } catch (error) {
    statusError(ctx,error);
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
    statusOK(ctx,data); 
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};




const del = async (ctx: any) => {
  try {
    const id = Number(ctx?.params?.id);
    const data = await prisma.user.deleteMany({ where: { id } });
    statusOK(ctx,data); 
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};


const login = async (ctx: any) => {
  try {
    const { email, password }: { email: string; password: string } =
      await ctx.request.body().value;

    const user = await prisma.user.findFirst(
      {
        where: { email, password }
      });



    if (!user) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"Usuario o password incorrecta!!");      
      return;
    }


    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado)) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
      return;
    }


    if (user && user.estadoId == Estado.cambiar_pass) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"Password bloqueda. Debe cambiar su password");
      return;
    }

    const userRet = new userClass(user);

    const data = await authController.giveMeToken(userRet);

    statusOK(ctx,data); 

  } catch (error) {
    statusError(ctx,error);
    return;
  }
};




const addSaldo = async (ctx: any) => {
  try {
    const { id, importe, bizum } = await ctx.request.body().value;
    const user = await prisma.user.findFirst(
      {
        where: { id }
      });


    if (user && user.estadoId == Estado.baja) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"Usuario dado de baja. Póngase en contacto con el administrador");
      return;
    }

    let saldo = user ? user.saldo.toNumber() : 0;
    saldo += importe;
    const userId = user ? user.id : 0;


    const updateUser = prisma.user.updateMany({where: { id: user?.id }, data: { saldo }});

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


    const  data = { ok: true }
    statusOK(ctx,data); 
    
  } catch (error) {
    statusError(ctx,error);
    return;
  }
};



const reserPassByCode = async (ctx: any) => {
  try {
    const { code, password }: { code: string; password: string; } =
      await ctx.request.body().value;

    const codeSecure = await prisma.codeSecure.findFirst({where: { code } });


    if (!codeSecure) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"código no válido!!");
      return;
    }

    const user = await prisma.user.findFirst(
      {
        where: { id: codeSecure.userId }
      });

    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado)) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
      return;
    }


    await prisma.user.updateMany({
      where: { id: user?.id },
      data: {
        password,
        estadoId: Estado.activo
      }
    })


    const  data = { code: true }
    statusOK(ctx,data); 

  } catch (error) {
    statusError(ctx,error);
    return;
  }
};



const getCodeResetPass = async (ctx: any) => {
  try {
    const { email }: { email: string; } =
      await ctx.request.body().value;

    const user = await prisma.user.findFirst(
      {
        where: { email }
      });



    if (!user) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"correo no válido!!");
      return;
    }


    if (user && (user.estadoId == Estado.baja || user.estadoId == Estado.bloqueado)) {
      setStatus(ctx,200,StatusCodes.CONFLICT,"Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
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
      statusError(ctx,error);
      return;
    }

    const  data = { code: true }
    statusOK(ctx,data); 
  } catch (error) {
    statusError(ctx,error);

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
