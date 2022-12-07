import { Router } from "../../deps.ts";
import { User } from "../user.ts";

const routerUsers = new Router();

routerUsers
  .get("/users", (context) => {
    const usuario: User = {
      name: "Fernando",
      age: 36,
      lang: "Javascript",
    };
    context.response.status = 200;
    context.response.body = usuario;
  });

export default routerUsers;
