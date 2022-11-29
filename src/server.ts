import { Application, Context } from "../deps.ts";
import router from "./routes/users.ts";

const app = new Application();
const port = 3000;

// app.use(async (context: Context, next) => {
//   const root = `${Deno.cwd()}/static`
//   try {
//     await context.send({ root })
//   } catch {
//     next()
//   }
// })

app.use(router.routes());

app.use(async (ctx: Context) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "404 File not found";
  }
});



// app.use((ctx: Context) => {
//   ctx.response.body = "Hola Deno 🐱‍🐉";
//   ctx.response.status = 200;
// });



await app.listen({ port });
