// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../../dep/deps.ts";
import { userClass } from "./user.model.ts";
import authController from "../../../general/entity/auth/controller.ts"
import { TC_UserEstado } from "../../enums.ts"
import { sendEmail } from "../../../../utils/sendEmail.ts";
import { setStatus, statusError, statusOK } from "../../../../utils/status.ts";
import { aureDB } from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import userBusiness from "../../business/user.ts";

const entity = new aureDB(client, entities, 'User');

const get = async (ctx: any) => {

  const sqlSelect = ` select * `;
  const sqlFrom = ` from "User"  `;
  const orderBydefect = ``;
  await entity.execute_query(ctx, client, sqlSelect, sqlFrom, orderBydefect);


};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await entity.findFirst({ where: { id } });
  statusOK(ctx, data);

};

const InRed=async (ctx: any) => {
  const total = await entity.aggregate({ _count: 'id', where: {estadoid: TC_UserEstado.activo }, whereLstStr : ['saldo < 1'] });  
  statusOK(ctx, {total : Number(total)});
};



const add = async (ctx: any) => {
  try {
    const newItem = await ctx.request.body().value;
    const { email } = newItem;

    const empleadaExists = await entity.findFirst({ where: { email } });
    if (empleadaExists) {
      setStatus(ctx, 409, StatusCodes.CONFLICT, 'usuario ya existe!')
      return;
    }


    const maximoId = await entity.aggregate({ _max: 'id' });
    newItem['id'] = maximoId + 1;  //mejor usar una secuencia  AUREMEJORAS

    const data = await entity.create({ data: newItem });

    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const update = async (ctx: any) => {
  try {
    const id = Number(ctx?.params?.id);
    const itemUpdateInput = await ctx.request.body().value;
    const data = await entity.update({ data: itemUpdateInput, where: { id } });
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};




const del = async (ctx: any) => {
  try {
    const id = Number(ctx?.params?.id);
    const data = await entity.del({ where: { id } });
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const login = async (ctx: any) => {
  try {


    const { email, password }: { email: string; password: string } =
      await ctx.request.body().value;


    const user = await entity.findFirst({ where: { email, password } });

    if (!user) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Usuario o password incorrecta!!");
      return;
    }


    if (user && (user.estadoid == TC_UserEstado.baja || user.estadoid == TC_UserEstado.bloqueado)) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
      return;
    }


    if (user && user.estadoid == TC_UserEstado.cambiar_pass) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Password bloqueda. Debe cambiar su password");
      return;
    }

    const userRet = new userClass(user);

    const data = await authController.giveMeToken(userRet);

    statusOK(ctx, data);

  } catch (error) {
    statusError(ctx, error);
    return;
  }
};



// cuando grabo yo. Solo se incrementa el importe
const addSaldo = async (ctx: any) => {
  try {
    const { id, importe } = await ctx.request.body().value;
    const result = await userBusiness.addSaldo(id, importe);
    statusOK(ctx, { ok: result });

  } catch (error) {
    statusError(ctx, error);
    return;
  }
};



const reserPassByCode = async (ctx: any) => {
  try {
    const { code, password }: { code: string; password: string; } =
      await ctx.request.body().value;

    const entityCodeSecure = new aureDB(client, entities, 'CodeSecure');

    const codeSecure = await entityCodeSecure.findFirst({ where: { code } });

    if (!codeSecure) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "código no válido!!");
      return;
    }

    const user = await entity.findFirst({where: { id: codeSecure.userid }});

    if (user && (user.estadoid == TC_UserEstado.baja || user.estadoid == TC_UserEstado.bloqueado)) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
      return;
    }

    await entity.update({where: { id: user?.id }, data: {password, estadoid: TC_UserEstado.activo}});

    const data = { code: true }
    statusOK(ctx, data);

  } catch (error) {
    statusError(ctx, error);
    return;
  }
};



const getCodeResetPass = async (ctx: any) => {
  try {
    const { email }: { email: string; } =
      await ctx.request.body().value;

    const user = await entity.findFirst({where: { email }});

    if (!user) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "correo no válido!!");
      return;
    }


    if (user && (user.estadoid == TC_UserEstado.baja || user.estadoid == TC_UserEstado.bloqueado)) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
      return;
    }


    // generar un uuid y guardarlo en una tabla... codigosOperaciones   (tipo 1 => condigo para reset correo)
    // userId, codigo, fecha caducidad?
    // una vez generado, se envia correo a usuario


    const myUUID = crypto.randomUUID();

    const entityCodeSecure = new aureDB(client, entities, 'CodeSecure');

    await entityCodeSecure.create({ data: { code: myUUID, type: 1, userid: user.id }});

    const subject = "TTEC-euromillones. Su codigo para resetear la password";

    const bodyHtml = `<div>Prueba final.Su codigo para resetear la password</div><div><span style='font-size: 15px;color : green'>${myUUID}</span></div>`;

    try {
      const sender_email = await sendEmail('aure.desande@gmail.com', subject, bodyHtml);

      if (!sender_email.enviado) {
        throw new Error(sender_email.message);
      }


    }
    catch (error) {
      statusError(ctx, error);
      return;
    }

    const data = { code: true }
    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);

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
  del,
  InRed
};
