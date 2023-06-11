import { Application } from "../dep/deps.ts";

import generalRouter from "../apps/general/router.js"
import gestionCasaRouter from "../apps/gestion-casa/router.js"


function init(app: Application) {
  app.use(generalRouter.routes());  
  app.use(gestionCasaRouter.routes());
}

export default {
  init,
};
