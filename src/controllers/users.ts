import { Context } from "../../deps.ts";
import { User } from "../user.ts";

const getUsers = (context: Context) => {
  const usuario: User = {
    name: "Fernando",
    age: 36,
    lang: "Javascript",
  };
  context.response.status = 200;
  context.response.body = usuario;
};

export { getUsers };
