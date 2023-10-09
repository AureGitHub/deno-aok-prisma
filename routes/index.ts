import { Application } from "../dep/deps.ts";

import generalRouter from "../apps/general/router.js"
import gestionCasaRouter from "../apps/gestion-casa/router.js"

import vallegrandeRouter from "../apps/vallegrande/router.js"



function init(app: Application) {
  app.use(generalRouter.routes());  
  app.use(gestionCasaRouter.routes());

  app.use(vallegrandeRouter.routes());

  // app.use(vallegrandeRouter.routes());
}

export default {
  init,
};
