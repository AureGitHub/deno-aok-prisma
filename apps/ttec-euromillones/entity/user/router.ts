import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import require from "../../../../middleware/require.ts";




const router = new Router({
    prefix: "/user",
  });

router
.post("/addSaldo", require.requireAdmin , controller.addSaldo)
.post("/reserPassByCode", controller.reserPassByCode)
.post("/getCodeResetPass", controller.getCodeResetPass)
.post("/login", controller.login)
.get("/InRed", require.requireAdmin,  controller.InRed)
.get("/", require.requireAdmin, controller.get)
.get("/:id", require.requireUser,  controller.getById)
.post("/", require.requireGod,  controller.add)
.put("/:id", require.requireGod,   controller.update)
.delete("/:id", require.requireGod,   controller.del)


;

export default router;
