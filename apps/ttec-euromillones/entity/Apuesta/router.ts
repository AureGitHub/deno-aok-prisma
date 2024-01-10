import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import require from "../../../../middleware/require.ts";


const router = new Router({
    prefix: "/Apuesta",
  });

router

.get("/", require.requireUser, controller.get)
.get("/:id",require.requireUser,  controller.getById)
.post("/", require.requireAdmin, controller.add)
.put("/cerrar/:id", require.requireAdmin,  controller.cerrar)
.put("/finalizar/:id", require.requireAdmin,  controller.finalizar)
.put("/:id", require.requireAdmin,  controller.update)
.delete("/:id",  require.requireAdmin,  controller.del)


;

export default router;
