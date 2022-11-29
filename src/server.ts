import { Application, Context } from "../deps.ts";
import router from "./routes/users.ts";

const app = new Application();
const port = 3000;

app.use(router.routes());

app.use((ctx: Context) => {
  ctx.response.body = "Hola Deno 🐱‍🐉";
  ctx.response.status = 200;
});

console.log(`Server running in http://localhost:${port} 🐢`);

await app.listen({ port });
