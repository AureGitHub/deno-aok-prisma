import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import require from "../../../../middleware/require.ts";

const router = new Router({
    prefix: "/gasto",
  });

router
.get("/", require.requireUser, controller.get)
.get("/:id", require.requireUser, controller.getById)
.post("/", require.requireUser, controller.add)
.put("/:id", require.requireUser,  controller.update)
.delete("/:id", require.requireUser,  controller.del)


;

export default router;
