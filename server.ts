
import { Application, isHttpError, logger, Router, RouterContext, Status } from "./dep/deps.ts";
//import router from "./routes/router.js"

import appRouter from "./routes/index.ts";

import authController from "./controllers/auth.controller.ts";

const app = new Application();
const router = new Router();


// Middleware Logger
app.use(logger.default.logger);
app.use(logger.default.responseTime);



const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const now = `${today.toLocaleDateString()}  ${today.toLocaleTimeString()}`;


app.use(async (ctx, next) => {

  await next();
  //Manda siempre secure... si esxiste
  if(ctx.state.secure){
    ctx.response.body['secure'] = ctx.state.secure;
  }
  
 
});


app.use(async (ctx, next) => {

  //AQUI COJO EL TOKEN !!!!!!!!!!!!!!!!!!!!!!!
  const token  = await ctx.request.headers.get('Authorization');
  ctx.state.now = now;
  ctx.state.token = token;
  await next();
});

// este middel comprueba que el token sea correcto y lo refresca
app.use(authController.secureTokenController);
  



app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      switch (err.status) {
        case Status.NotFound:
          // handle NotFound
          ctx.response.body = `Direccion no encontrada !!! ${now}`;
          break;
        default:
          // handle other statuses
          ctx.response.body = `Error!! !!! ${now}`;
      }
    } else {
      // rethrow if you can't handle the error
      ctx.response.body = `Error!!  ${err} !!! ${now}`;
    }
  }
});







router.get<string>("/api/healthchecker", (ctx: RouterContext<string>) => {
  ctx.response.status = 200;
  ctx.response.body = {
    status: "success",
    message:
      "Welcome to JWT Authentication in Deno with Asymmetric Cryptography",
  };
});


appRouter.init(app);

app.use(router.routes());
app.use(router.allowedMethods());








const Denoenv = Deno.env.get("PORT");

const port: number = Denoenv ? parseInt(Denoenv) : 3000;


/**
 * Start server.
 */



app.addEventListener("listen", ({ port, secure }) => {
  console.info(
    `🚀 Server started on ${secure ? "https://" : "http://"}localhost:${port}`
  );
});

app.listen({ port });
