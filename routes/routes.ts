import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../modules/user/controllers/UserController.ts";
import auth from "../middlewares/auth.ts";
const router = new Router();

//Users Route
router
  .get("/users", auth.api, UserController.index)
  .get("/users/:id", UserController.show)
  .post("/users", UserController.store)
  .patch("/users/:id", UserController.update)
  .delete("/users/:id", UserController.destroy);

export default router;
