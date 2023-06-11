import { Router } from "../../dep/deps.ts";

import userRouter from "./entity/user/router.ts";
import appRouter from "./entity/app/router.ts";
import authRouter from "./entity/auth/routes.ts"

import requireApp from "../../middleware/requireApp.ts"


const router = new Router({
  prefix: "/api/general",
});

router.use(authRouter.routes());
router.use(userRouter.routes());
router.use(requireApp, appRouter.routes());


export default router;






