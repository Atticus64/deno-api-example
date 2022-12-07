import { Application, Context } from "../deps.ts";
import router from "./routes/users.ts";

const app = new Application();
const port = 3000;

app.use(router.routes());

app.use(async (ctx: Context) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/public`,
      index: "index.html",
    });
  } catch {
    ctx.response.status = 404;
    ctx.response.body = "404 not found";
  }
});


await app.listen({ port });

console.log(`server running on http://localhost${port} 🦀`);
