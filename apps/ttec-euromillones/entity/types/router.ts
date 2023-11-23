import { Router } from "../../../../dep/deps.ts";
import controller from "./controller.ts";



const router = new Router({
    prefix: "/types",
  });

router



.get("/:cual", controller.get)

;

export default router;
