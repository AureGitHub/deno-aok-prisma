import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";

const router = new Router({
    prefix: "/turnos",
  });

router
.get("/", requireUser, controller.get)
.post("/", requireUser, controller.add)
.delete("/:id", requireUser,  controller.del)


;

export default router;
