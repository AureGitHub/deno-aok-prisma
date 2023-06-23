import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";
import requireGod from "../../../../middleware/requireGod.ts";


const router = new Router({
    prefix: "/tipogasto",
  });

router
.get("/", requireUser, controller.get)
.get("/:id", requireUser, controller.getById)
.post("/", requireGod, controller.add)
.put("/:id", requireGod,  controller.update)
.delete("/:id", requireGod,  controller.del)
;

export default router;
