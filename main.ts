import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes/routes.ts";
import notFound from "./utils/404.ts";
const app = new Application();

const env = config();
const PORT = +env.PORT || 3000;

app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

await app.listen({ port: PORT });
