import {aureDB} from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities.ts";


const entity =new aureDB(client,entities,'UserXMovimiento' );


const get = async (ctx: any) => {

  const sqlSelect = `   
  select
  ux."createdAt" fecha,
  ux."importe",
  CASE WHEN ux.bizumid IS NULL 
            THEN  CASE WHEN ux.apuestaid IS NULL 
            THEN uxx.descripcion
            ELSE uxx.descripcion || '(' || to_char(a.fecha, 'dd/mm/yyyy') || ')'
    END 
            ELSE uxx.descripcion || ' (b)'
    END AS tipo  
  `;

  const sqlFrom = ` 
  from "UserXMovimiento" ux 
  inner join "User" u on ux.userid=u.id
  inner join "TC_MovimientoTipo" uxx on ux.tipoid=uxx.id  
  left join  "Apuesta" a on  ux.apuestaid = a.id 
    `;
  const orderBydefect = `  ux."createdAt"  `;
   await entity.execute_query(ctx, client, sqlSelect, sqlFrom, orderBydefect);
};


export default {
  get,
};
