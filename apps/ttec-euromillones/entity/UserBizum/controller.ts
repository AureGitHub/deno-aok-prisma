// deno-lint-ignore-file no-explicit-any
import { StatusCodes } from "../../../../dep/deps.ts";
import { execute_query } from "../../../../utils/query.ts";
import { setStatus, statusError, statusOK } from "../../../../utils/status.ts";
import { BizumXEstado, UserXMovimientoXTipo } from "../../enums.ts";
import { Prisma } from "../../generated/client/deno/edge.ts";
import prisma from "../../prisma/db.ts";



const get = async (ctx: any) => {

  const sqlSelect = `   
  select 
    ux.id as id,
    u."name" as dequien,
    ux.importe,
    ux."createdAt"  as fecha,
    ux."estadoId" as estadoId,
    uxx.descripcion as estadodesc
    
  `;

  const sqlFrom = ` 
  from "UserXBizum" ux 
  inner join "User" u on u.id = ux."userId" 
  inner join "UserXBizumXEstado" uxx on ux."estadoId" = uxx.id 
    `;
  const orderBydefect = ``;
  await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);

};


const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  const data = await prisma.userXBizum.findFirst({ where: { id } });

  statusOK(ctx, data);

};


const add = async (ctx: any) => {
  try {
    const newItem: Prisma.UserXBizumUncheckedCreateInput = await ctx.request.body().value;

    newItem.estadoId = BizumXEstado.pendiente;


    const data = await prisma.userXBizum.create({
      data: newItem
    });

    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const update = async (ctx: any) => {
  try {


    const id = Number(ctx?.params?.id);
    const itemUpdateInput: Prisma.UserXBizumUpdateInput = await ctx.request.body().value;

    const { estadoId } = await ctx.request.body().value;



    //const {id}  = await request.body().value;

    const oldBizum = await prisma.userXBizum.findFirst({ where: { id } });


    if (!oldBizum) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "No existe el bizum buscado!!");
      return;
    }

    if (estadoId == oldBizum?.estadoId) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "El estado no ha cambiado!!");
      return;
    }


    const userUpdate = await prisma.user.findFirst({ where: { id: oldBizum?.userId } });


    if (!userUpdate) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "No existe el usuario del bizum!!");
      return;
    }

    const updateUserBizum = prisma.userXBizum.updateMany({
      where: { id },
      data: itemUpdateInput
    })

    if (oldBizum.estadoId == BizumXEstado.pendiente) {
      // lo vamos a pasar a confirmado...
      const saldo = oldBizum.importe.toNumber() + userUpdate?.saldo.toNumber();

      const userUpdateSaldo = prisma.user.updateMany({
        where: { id: oldBizum.userId },
        data: { saldo }

      });

      const createMovimiento = prisma.userXMovimiento.create({
        data: {
          tipoId: UserXMovimientoXTipo.ingreso,
          importe: oldBizum.importe,
          userId: oldBizum.userId
        }
      }
      );

      const createSaldoTmp = prisma.userXSaldoXTmp.create({
        data: {
          saldo,
          userId: oldBizum.userId,
          movimientoId: (await createMovimiento).id
        }
      }
      );

      const createBizumXMov = prisma.bizumXMovimiento.create({
        data: {
          bizumId : id,          
          movimientoId: (await createMovimiento).id
        }
      }
      );


      prisma.$transaction([updateUserBizum, userUpdateSaldo, createSaldoTmp, createBizumXMov]);

    }
    else {
      //lo vamos a pasar a pendiente..

      const saldo = userUpdate?.saldo.toNumber() - oldBizum.importe.toNumber();

      const userUpdateSaldo = prisma.user.updateMany({
        where: { id: oldBizum.userId },
        data: { saldo }

      });

      //borro el movimiento

      // const deleteMovimiento = prisma.userXMovimiento.delete({
      //   data: {
      //     tipoId: UserXMovimientoXTipo.ingreso,
      //     importe: oldBizum.importe,
      //     userId: oldBizum.userId
      //   }
      // }
      // );




    }








    statusOK(ctx, {ok: true});
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};

const updatependientesAll = async (ctx: any) => {
  try {

    const data = await prisma.userXBizum.updateMany({
      where: { estadoId: BizumXEstado.pendiente },
      data: { estadoId: BizumXEstado.confirmado }
    })

    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};




const del = async (ctx: any) => {
  try {

    const id = Number(ctx?.params?.id);
    const data = await prisma.userXBizum.deleteMany({ where: { id } });

    statusOK(ctx, data);
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


export default {
  get,
  getById,
  add,
  update,
  updatependientesAll,
  del
};
