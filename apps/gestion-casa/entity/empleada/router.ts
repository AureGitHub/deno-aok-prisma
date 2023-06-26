import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/empleada",
  });

router
.get("/", requireUser, controller.get)
.get("/:id", requireUser, controller.getById)
.post("/", requireUser, controller.add)
.put("/:id", requireUser,  controller.update)
.delete("/:id", requireUser,  controller.del)


;

export default router;
