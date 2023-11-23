import { Router } from "../../dep/deps.ts";
import userRouter from "./entity/user/router.ts";
import typesRouter from "./entity/types/router.ts";



const router = new Router({
  prefix: "/api/ttec-euromillones",
});

// router.use(
//   (Context,next)=> {requireApp(Context,next,'gestion-casa'), casaRouter.routes()}
//   );

router.use(typesRouter.routes());  
router.use(userRouter.routes());  


export default router;







