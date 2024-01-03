import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";
import requireUser from "../../../../middleware/requireUser.ts";
import requireGod from "../../../../middleware/requireGod.ts";

const router = new Router({
    prefix: "/UserXMovimiento",
  });

router.get("/", controller.get);

export default router;
