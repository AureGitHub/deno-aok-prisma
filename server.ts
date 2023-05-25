
import { Application, isHttpError, logger, Router, RouterContext, Status } from "./dep/deps.ts";
//import router from "./routes/router.js"

import appRouter from "./routes/index.ts";

const app = new Application();
const router = new Router();


// Middleware Logger
app.use(logger.default.logger);
app.use(logger.default.responseTime);



const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const now = `${today.toLocaleDateString()}  ${today.toLocaleTimeString()}`;


app.use(async (ctx, next) => {
  ctx.state.now = now;
  await next();
});
  



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

/**
 * Start server.
 */



app.addEventListener("listen", ({ port, secure }) => {
  console.info(
    `🚀 Server started on ${secure ? "https://" : "http://"}localhost:${port}`
  );
});

const port = 3000;
app.listen({ port });
