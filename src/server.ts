import { Application, Context } from "../deps.ts";
import routerUsers from "./routes/users.ts";

const app = new Application();
const port = 3000;

app.use(routerUsers.routes());

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


console.log(`server running on http://localhost:${port} 🦀`);
await app.listen({ port });

