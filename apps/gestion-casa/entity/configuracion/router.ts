import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/require.ts";
import requireGod from "../../../../middleware/requireGod.ts";


const router = new Router({
    prefix: "/configuracion",
  });

router
.get("/", requireUser, controller.get)
.get("/:key", requireUser, controller.getById)
.post("/", requireGod, controller.add)
.put("/:key", requireGod,  controller.update)
.delete("/:key", requireGod,  controller.del)
;

export default router;
