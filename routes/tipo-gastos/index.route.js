import { Router,prisma } from "../../dep/deps.ts";


const router = new Router();

/**
 * Setup routes.
 */

router
  .get("/", async (context) => {
    const result = await prisma.TC_tiposGastos.findMany();
    context.response.body = result;
  })
  .get("/:id", async (context) => {
    const { id } = context.params;
    const data = await prisma.TC_tiposGastos.findUnique({
      where: {
        id: Number(id),
      },
    });


    context.response.body = data || "no encontrado";
  })
  .post("/", async (context) => {
    const { name, description } = await context.request.body("json").value;
    const result = await prisma.TC_tiposGastos.create({
      data: {
        name,
        description,
      },
    });
    context.response.body = result;
  })
  .delete("/:id", async (context) => {
    const { id } = context.params;
    const deleted = await prisma.TC_tiposGastos.delete({
      where: {
        id: Number(id),
      },
    });
    context.response.body = deleted;
  });

export default router;
