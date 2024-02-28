// deno-lint-ignore-file no-explicit-any
import { statusError, statusOK } from "../../../../utils/status.ts";
import {aureDB} from "../../../../aureDB/aureDB.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import apuestaBusiness from "../../business/apuesta.ts";
import { TC_ApuestaEstado, TC_UserEstado, TC_UserRole } from "../../enums.ts";
import { StatusCodes } from "https://deno.land/x/https_status_codes@v1.2.0/mod.ts";


const entity =new aureDB(client,entities,'Apuesta' );


const get= async (ctx: any) => {


  const entityUser = new aureDB(client, entities, 'User');
  const entityApuesta = new aureDB(client, entities, 'Apuesta');


  const users = await entityUser.findMany({where: {estadoid: TC_UserEstado.activo }});

  const totalUsers = users.length;
  const lstAllEmails = users.map((a)=> a.email).join(',');

  let lstUserInConflictos = users.filter(a=> a.saldo <= 2);

  lstUserInConflictos = lstUserInConflictos.sort((a,b)=> a.saldo - b.saldo);

  const sqlSelectApuesta = ` select  fecha, ganado,apostado  from "Apuesta" a 
  where estadoid = 3
  order by id desc
  limit 1 `;


  let fechaUltimaApuesta = '';
  let ganadoUltimaApuesta = '';
  let apostadoUltimaApuesta = '';
  

  const result=await client.queryObject(sqlSelectApuesta);

  if(result.rowCount == 1){
    fechaUltimaApuesta = new Date(result.rows[0].fecha).toLocaleDateString();
    ganadoUltimaApuesta = result.rows[0].ganado;
    apostadoUltimaApuesta = result.rows[0].apostado;
    if(apostadoUltimaApuesta.indexOf('.')>0){
      apostadoUltimaApuesta=apostadoUltimaApuesta.split('.')[0];
    }

  }


  


   
  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data:{ totalUsers, lstAllEmails,  fechaUltimaApuesta, ganadoUltimaApuesta, apostadoUltimaApuesta, lstUserInConflictos}
        },
   };

 
};




export default { 
    get,
};
