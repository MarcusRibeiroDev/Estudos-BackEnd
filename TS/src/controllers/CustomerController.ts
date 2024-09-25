import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";
import { ListCustomerServices } from "../services/ListCustomerServices";
import { DeleteCustomerService } from "../services/DeleteCustomerService";

class CustomerController {
  async create(req: FastifyRequest, res: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };
    const customerReply = await new CreateCustomerService().execute({
      name,
      email,
    });

    res.send(customerReply);
  }

  async listAll(res: FastifyReply) {
    const customerReply = await new ListCustomerServices().execute();

    res.send(customerReply);
  }

  async delete(req: FastifyRequest, res: FastifyReply) {
    const { id } = req.body as { id: string };
    const customerReply = await new DeleteCustomerService().execute(id);

    res.send(customerReply);
  }
}

export { CustomerController };
