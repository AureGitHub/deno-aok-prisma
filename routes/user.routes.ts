import { Router } from "../dep/deps.ts";
import userController from "../controllers/user.controller.ts";
import requireUser from "../middleware/requireUser.ts";

const router = new Router();

router
.get<string>("/me", requireUser, userController.getMeController)
.put("/:id",  userController.getUpdateController)
.delete("/:id",  userController.getDeleteController)
;

export default router;
