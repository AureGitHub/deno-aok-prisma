import { Router } from "../../dep/deps.ts";

import casaRouter from "./entity/casa/router.ts";


import requireApp from "../../middleware/requireApp.ts"


const router = new Router({
  prefix: "/api/gestion-casa",
});

router.use(
  (Context,next)=> {requireApp(Context,next,'gestion-casa'), casaRouter.routes()}
  );


export default router;






