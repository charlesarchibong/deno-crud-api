import { Router } from "https://deno.land/x/oak/mod.ts";
import UserController from "../controllers/UserController.ts";

const router = new Router();

//Users Route
router.get("/users", UserController.index);
router.get("/users/:id", UserController.show);
router.post("/users", UserController.store);

export default router;
