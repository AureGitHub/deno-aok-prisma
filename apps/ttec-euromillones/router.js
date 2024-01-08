import { Router } from "../../dep/deps.ts";
import userRouter from "./entity/user/router.ts";
import typesRouter from "./entity/types/router.ts";
import userxbizumRouter from "./entity/UserBizum/router.ts";
import apuestaRouter from "./entity/Apuesta/router.ts";
import movimientoRouter from "./entity/Movimiento/router.ts";
import entitiesRouter from "./aureDB/entities/router.ts";
import prormacion from "./programacion/programacion.ts"


prormacion.execute();




const router = new Router({
  prefix: "/api/ttec-euromillones",
});


router.use(typesRouter.routes());  
router.use(userRouter.routes());  
router.use(userxbizumRouter.routes());  
router.use(apuestaRouter.routes());  
router.use(movimientoRouter.routes());  
router.use(entitiesRouter.routes());  

export default router;







