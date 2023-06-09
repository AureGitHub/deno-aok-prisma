import type { Context  } from "../dep/deps.ts";


const requireGod = async (ctx: Context, next: () => Promise<unknown>) => {


  // debería haber elegido en cliente una app y traer en role en user

  if(!ctx.state.user || ctx.state.user.role !='GOD')
  {
    ctx.response.body = {
      status: "fail",
      message: "You are not God",
    };
    return;
  }

  await next();

};

export default requireGod;

