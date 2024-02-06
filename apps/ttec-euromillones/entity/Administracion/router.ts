import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import require from "../../../../middleware/require.ts";


const router = new Router({
    prefix: "/Administracion",
  });

router

.get("/", require.requireGod, controller.get);

export default router;
