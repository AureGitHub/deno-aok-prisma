import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";

const router = new Router({
    prefix: "/tipoagenda",
  });

router
.get("/", requireUser, controller.get)
.get("/:id", requireUser, controller.getById)
;

export default router;
