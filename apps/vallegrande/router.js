import { Router } from "../../dep/deps.ts";
import categoriaRouter from "./entity/categoria/router.ts";


const router = new Router({
  prefix: "/api/vallegrande",
});

// router.use(
//   (Context,next)=> {requireApp(Context,next,'gestion-casa'), casaRouter.routes()}
//   );

router.use(categoriaRouter.routes());  

export default router;







