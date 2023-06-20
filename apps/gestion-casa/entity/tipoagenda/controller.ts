import { StatusCodes } from "../../../../dep/deps.ts";
import   prisma  from "../../prisma/db.ts";


const get= async (ctx: any) => {

    const data = await prisma.tipoagenda.findMany();
    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};

const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await prisma.tipoagenda.findFirst({where: {id}});

    ctx.response.status = 201;
    ctx.response.body = {
      status: StatusCodes.OK,
      data,
    };

};



export default { 
    get,
    getById,
};
