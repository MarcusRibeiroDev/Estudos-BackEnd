import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import { CustomerController } from "./controllers/CustomerController";

export const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get("/customers", async (req: FastifyRequest, res: FastifyReply) => {
    return new CustomerController().listAll(res);
  });

  fastify.post("/customers", async (req: FastifyRequest, res: FastifyReply) => {
    return new CustomerController().create(req, res);
  });

  fastify.delete(
    "/customers",
    async (req: FastifyRequest, res: FastifyReply) => {
      return new CustomerController().delete(req, res);
    }
  );
};
