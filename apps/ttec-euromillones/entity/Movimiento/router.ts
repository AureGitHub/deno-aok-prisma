import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/UserXMovimiento",
  });

router.get("/", controller.get);

export default router;
