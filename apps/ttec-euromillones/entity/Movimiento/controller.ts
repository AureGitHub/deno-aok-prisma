import { execute_query } from "../../../../utils/query.ts";
import prisma from "../../prisma/db.ts";


const get = async (ctx: any) => {

  const sqlSelect = `   
  select
  ux."createdAt" fecha,
  ux."importe",
  CASE WHEN bx.id IS NULL 
            THEN uxx.descripcion
            ELSE uxx.descripcion || ' (b)'
    END AS tipo
  `;

  const sqlFrom = ` 
  from "UserXMovimiento" ux 
  inner join "User" u on ux.userid=u.id
  inner join "UserXMovimientoXTipo" uxx on ux.tipoid=uxx.id
  left join "BizumXMovimiento" bx on ux.id=bx.movimientoid
    `;
  const orderBydefect = ``;
   await execute_query(ctx, prisma, sqlSelect, sqlFrom, orderBydefect);
};


export default {
  get,
};
