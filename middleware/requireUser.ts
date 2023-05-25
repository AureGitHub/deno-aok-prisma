import type { Context  } from "../dep/deps.ts";

const requireUser = async (ctx: Context, next: () => Promise<unknown>) => {

  if (!ctx.state.token){
    ctx.response.body = {
      status: "fail",
      message: "You are not logged in",
    };
    return;
  }

  await next();

};

export default requireUser;
