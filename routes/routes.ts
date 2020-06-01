import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../controllers/UserController.ts";

const router = new Router();

//Users Route
router
  .get("/users", UserController.index)
  .get("/users/:id", UserController.show)
  .post("/users", UserController.store)
  .put("/users/:id", UserController.update)
  .delete("/users/:id", UserController.destroy);

export default router;
