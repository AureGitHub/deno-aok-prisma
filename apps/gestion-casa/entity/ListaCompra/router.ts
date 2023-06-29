import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";
import requireGod from "../../../../middleware/requireGod.ts";


const router = new Router({
    prefix: "/lista-compra",
  });

router
.get("/", requireUser, controller.get)
.post("/", requireGod, controller.add)
.delete("/:id", requireGod,  controller.del)
;

export default router;
