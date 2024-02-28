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
  const users = await entityUser.findMany({where: {estadoid: TC_UserEstado.activo }});

  const totalUsers = users.length;
  const lstAllEmails = users.map((a)=> a.email).join(',');

  const lstAllEmailsInRed = users.filter(a=> a.saldo < 1).map((a)=> a.email).join(',');

   
  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data:{ totalUsers, lstAllEmails, lstAllEmailsInRed}
        },
   };

 
};




export default { 
    get,
};
