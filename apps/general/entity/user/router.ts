import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";

const router = new Router({
    prefix: "/api/users",
  });

router
.get<string>("/me", requireUser, controller.getMe)
.get("/", requireUser, controller.get)
.get("/:id", requireUser, controller.getById)
.post("/", controller.add)
.put("/:id", requireUser,  controller.update)
.delete("/:id", requireUser,  controller.del)


;

export default router;
