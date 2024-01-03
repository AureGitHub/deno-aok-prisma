import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/Apuesta",
  });

router

.get("/", controller.get)
.get("/:id",  controller.getById)
.post("/",  controller.add)
.put("/:id",   controller.update)
.delete("/:id",   controller.del)


;

export default router;
