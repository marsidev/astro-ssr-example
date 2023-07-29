import Fastify from "fastify";
import fastifyMiddie from "@fastify/middie";
import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "node:url";
import { handler as ssrHandler } from "./dist/server/entry.mjs";

const PORT = process.env.PORT || 8000;
const app = Fastify();

await app
  .register(fastifyStatic, {
    root: fileURLToPath(new URL("./dist/client", import.meta.url)),
  })
  .register(fastifyMiddie);
app.use(ssrHandler);

app.listen({ port: PORT }).then(() => {
  console.log(`Server running on http://localhost:${PORT}`);
});
