import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";

class CreateCustomerController {
  async handle(req: FastifyRequest, res: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };
    const customerReply = await new CreateCustomerService().execute({
      name,
      email,
    });

    res.send(customerReply);
  }
}

export { CreateCustomerController };
