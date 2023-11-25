import { StatusCodes } from "../../../../dep/deps.ts";
import { statusOK } from "../../../../utils/status.ts";
import prisma from "../../prisma/db.ts";


// deno-lint-ignore no-explicit-any
const get = async (ctx: any) => {

  const cual = ctx?.params?.cual;
  let result: any;
  switch (cual) {
    case 'UserXEstado':
      result = await prisma['userXEstado']['findMany']();
      break;

    case 'UserXRole':
      result = await prisma.userXRole.findMany();
      break;

      case 'ApuestaXEstado':
        result = await prisma.apuestaXEstado.findMany();
      break;

  }
  const data = { result, count: result.length };
  statusOK(ctx,data);   

};

export default {
  get,

};
