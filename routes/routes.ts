import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/users", async (context) => {
  context.response.body = "From user router";
});

router.post("/users", async (context) => {
  const { value } = await context.request.body();
  context.response.status = 201;
  context.response.body = value;
});

export default router;
