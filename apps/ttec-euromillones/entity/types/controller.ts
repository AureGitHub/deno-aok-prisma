import { StatusCodes } from "../../../../dep/deps.ts";
import prisma from "../../prisma/db.ts";


const get = async (ctx: any) => {

  const cual = ctx?.params?.cual;
  let data: any;
  switch (cual) {
    case 'UserXEstado':
      data = await prisma['userXEstado']['findMany']();
      break;

    case 'UserXRole':
      data = await prisma.userXRole.findMany();
      break;

  }

  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: { data, count: data.length },
  };

};

export default {
  get,

};
