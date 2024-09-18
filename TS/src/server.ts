import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes";

const app = Fastify({
  logger: true,
});

// Run the server!
const server = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

server();
