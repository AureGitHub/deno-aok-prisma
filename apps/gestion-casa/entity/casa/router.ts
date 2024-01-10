import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/require.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/api/casa",
  });

router
.get("/", requireGod, controller.get)
.get("/:id", requireGod, controller.getById)
.post("/", requireGod, controller.add)
.put("/:id", requireGod,  controller.update)
.delete("/:id", requireGod,  controller.del)


;

export default router;
