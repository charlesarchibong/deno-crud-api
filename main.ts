import { Application } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import router from "./routes/routes.ts";
import notFound from "./404.ts";
const app = new Application();

const users = db.collection("users");
const insertId = await users.insertOne(
  {
    name: "Charles Archibong",
    email: "charlesarchibong10@gmail.com",
    password: "12345",
  },
);
console.log(insertId);

const env = config();
const PORT = +env.PORT || 3000;

app.use(router.routes());
app.use(router.allowedMethods());
app.use(notFound);

await app.listen({ port: PORT });
