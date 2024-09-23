import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CreateCustomerController } from "./controllers/CreateCustomerController";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/test", async (req: FastifyRequest, res: FastifyReply) => {
    return { get: true };
  });

  fastify.post("/test", async (req: FastifyRequest, res: FastifyReply) => {
    return new CreateCustomerController().handle(req, res);
  });
};
