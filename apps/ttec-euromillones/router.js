import { Router } from "../../dep/deps.ts";
import userRouter from "./entity/user/router.ts";
import typesRouter from "./entity/types/router.ts";
import userxbizumRouter from "./entity/UserBizum/router.ts";
import apuestaRouter from "./entity/Apuesta/router.ts";


const router = new Router({
  prefix: "/api/ttec-euromillones",
});

router.use(typesRouter.routes());  
router.use(userRouter.routes());  
router.use(userxbizumRouter.routes());  
router.use(apuestaRouter.routes());  

export default router;







