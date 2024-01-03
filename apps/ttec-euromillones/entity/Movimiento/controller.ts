import {aureDB} from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities.ts";


const entity =new aureDB(client,entities,'UserXMovimiento' );


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
   await entity.execute_query(ctx, client, sqlSelect, sqlFrom, orderBydefect);
};


export default {
  get,
};
