import { Context, StatusCodes  } from "../dep/deps.ts";

const requireUser = async (ctx: Context, next: () => Promise<unknown>) => {

  if (!ctx.state.token){
    ctx.response.body = {
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "You are not logged in",
    };
    return;
  }

  await next();

};

export default requireUser;
