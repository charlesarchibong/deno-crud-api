import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/user", async (context) => {
  context.response.body = "From user router";
});

export default router;
