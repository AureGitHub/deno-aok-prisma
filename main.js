import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import routerTipoGastos from "./routes/tipo-gastos.routes.js";

const app = new Application();

const router = new Router()
.get("/isAlive", (ctx) => {
  ctx.response.body = `is live !!! ${Date.now()}`;
})
.get("/", (ctx) => {
  ctx.response.body = `Run !!! ${Date.now()}`;
});



router.use("/tipo-gastos",routerTipoGastos.routes());

app.use(router.routes());
app.use(router.allowedMethods());

/**
 * Start server.
 */

await app.listen({ port: 3000 });
console.log(`run in localhost:${3000}`)