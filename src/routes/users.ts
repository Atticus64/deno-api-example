import { Router } from "../../deps.ts";
import { getUsers } from "../controllers/users.ts";


const routerUsers = new Router();

routerUsers
  .get("/users", getUsers);

export default routerUsers;
