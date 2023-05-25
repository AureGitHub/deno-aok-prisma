import { Router } from "../dep/deps.ts";
import routerTipoGastos from "./tipo-gastos/index.route.js";

const router = new Router()
.get("/isAlive", (ctx) => {
  ctx.response.body = `is live !!! ${ctx.state.now}`;
})
.get("/", (ctx) => {
  
  ctx.response.body = `Run !!! ${now}`;
});



router.use("/tipo-gastos",routerTipoGastos.routes());

export default router;