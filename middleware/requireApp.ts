import type { Context  } from "../dep/deps.ts";


const requireApp = async (ctx: Context, next: () => Promise<unknown>, app : string) => {


  // debería haber elegido en cliente una app y traer en role en user

  if(app && (!ctx.state.app || ctx.state.user.app !=app))
  {
    ctx.response.body = {
      status: "fail",
      message: "You don't have permission for this app",
    };
    return;
  }

  await next();

};

export default requireApp;

