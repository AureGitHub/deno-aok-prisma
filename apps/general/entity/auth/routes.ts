import { Router } from "../../../../dep/deps.ts";
import authController from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";

const router = new Router({
    prefix: "/auth",
  });

router.post<string>("/login", authController.loginUserController);
router.get<string>("/logout", requireUser, authController.logoutController);
export default router;
