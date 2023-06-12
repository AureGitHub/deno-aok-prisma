import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/app",
  });

router
.get("/",  controller.get)
.get("/:id", controller.getById)
.post("/", requireGod, controller.add)
.put("/:id", requireGod,  controller.update)
.delete("/:id", requireGod,  controller.del)


;

export default router;
