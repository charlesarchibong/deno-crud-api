import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/routes.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx) => {
  ctx.response.body = "Welcome deno project";
});

await app.listen({ port: 3000 });
