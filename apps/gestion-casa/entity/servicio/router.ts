import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/require.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/servicios",
  });

router

.get("/getPresent", requireUser, controller.getPresent)
.get("/getResumenNoPagado", requireUser, controller.getResumenNoPagado)


.get("/", requireUser, controller.get)
.get("/:id", requireUser, controller.getById)

.post("/",  controller.add)

.put("/upServPagado/:empleadaid", requireUser,  controller.upServPagado)
.put("/:id", requireUser,  controller.update)

.delete("/:id", requireUser,  controller.del)


;

export default router;
