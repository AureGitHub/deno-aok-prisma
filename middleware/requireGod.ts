import { Context, StatusCodes  } from "../dep/deps.ts";


const requireGod = async (ctx: Context, next: () => Promise<unknown>) => {


  // debería haber elegido en cliente una app y traer en role en user

  if(!ctx.state.user || ctx.state.user.role !='GOD')
  {
    ctx.response.body = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "You are not God",
    };
    return;
  }

  await next();

};

export default requireGod;

