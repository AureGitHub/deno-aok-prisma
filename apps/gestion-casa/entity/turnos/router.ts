import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";

const router = new Router({
    prefix: "/turnos",
  });

router
.post("/AllOperations", requireUser, controller.AllOperations)
;

export default router;
