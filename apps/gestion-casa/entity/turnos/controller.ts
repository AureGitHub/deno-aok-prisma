import {  StatusCodes } from "../../../../dep/deps.ts";
import   prisma  from "../../prisma/db.ts";


  const AllOperations = async (ctx: any) =>  {
    try {
  
      const {fecha, quien} = await ctx.request.body().value;

      const turno = await prisma.turno.findFirst({where : {fecha}});
      const id= turno?.id;
  
      if(quien){
        if(turno){
          //update
          if(turno.quien!= quien){
          await prisma.turno.updateMany({
              where: {id },
              data: {quien}
            })
          }
  
        }
        else{
          await prisma.turno.create({
            data: {fecha, quien}
          });
        }
  
      }
      else{
        if(turno){
          await prisma.turno.deleteMany({where: {id}});
        }
      }
      
  
      ctx.response.status = 200;
      ctx.response.body = {
        status: StatusCodes.OK,
        data : {ok : 'yes'},
      };
    } catch (error) {
      ctx.response.status = 500;
      ctx.response.body = {
        status: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      };
      return;
    }


    

  }


export default { 
    AllOperations
};
