import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import require from "../../../../middleware/require.ts";

const router = new Router({
    prefix: "/userxbizum",
  });

router
// .get("/", requireUser, controller.get)
// .get("/:id", requireUser, controller.getById)
// .post("/", requireUser, controller.add)
// .put("/:id", requireUser,  controller.update)
// .delete("/:id", requireUser,  controller.del)

.get("/", require.requireUser , controller.get)
.get("/:id", require.requireUser,  controller.getById)
.post("/", require.requireUser,  controller.add)
.put("/cerrarAll", require.requireAdmin,   controller.cerrarAll)
.put("/Confirmar/:id", require.requireAdmin,   controller.confirmar)
.put("/:id", require.requireAdmin,   controller.update)
.delete("/:id", require.requireUser,   controller.del)


;

export default router;
