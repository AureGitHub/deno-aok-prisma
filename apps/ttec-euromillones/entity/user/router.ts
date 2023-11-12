import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/user",
  });

router
// .get("/", requireUser, controller.get)
// .get("/:id", requireUser, controller.getById)
// .post("/", requireUser, controller.add)
// .put("/:id", requireUser,  controller.update)
// .delete("/:id", requireUser,  controller.del)

.post("/login", controller.login)
.get("/", controller.get)
.get("/:id",  controller.getById)
.post("/",  controller.add)
.put("/:id",   controller.update)
.delete("/:id",   controller.del)


;

export default router;
