import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/require.ts";

const router = new Router({
    prefix: "/agenda",
  });

router

.get("/getResumen", requireUser, controller.getResumen)
.get("/", requireUser, controller.get)
.get("/:id", requireUser, controller.getById)
.post("/", requireUser, controller.add)
.put("/:id", requireUser,  controller.update)
.delete("/:id", requireUser,  controller.del)


;

export default router;
