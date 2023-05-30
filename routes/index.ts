import { Application } from "../dep/deps.ts";
import authRouter from "./auth.routes.ts";
//import userRouter from "./user.routes.ts";
import userRouter from "../entity/user/router.ts";

function init(app: Application) {
  app.use(authRouter.prefix("/api/auth/").routes());
  app.use(userRouter.routes());
}

export default {
  init,
};
