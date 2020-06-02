import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../modules/user/controllers/UserController.ts";
import auth from "../middlewares/auth.ts";
const router = new Router();

//Users Route
router
  .get("/users", ...[auth.api], UserController.index)
  .get("/users/:id", ...[auth.api], UserController.show)
  .post("/users", UserController.store)
  .put("/users/:id", ...[auth.api], UserController.update)
  .delete("/users/:id", ...[auth.api], UserController.destroy);

export default router;
