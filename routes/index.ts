import { Application } from "../dep/deps.ts";
import authRouter from "./auth.routes.ts";
//import userRouter from "./user.routes.ts";
import userRouter from "../apps/general/entity/user/router.ts";
import casaRouter from  "../apps/gestion-casa/entity/casa/router.ts"

function init(app: Application) {
  app.use(authRouter.prefix("/api/auth/").routes());
  app.use(userRouter.routes());
  app.use(casaRouter.routes());
}

export default {
  init,
};
