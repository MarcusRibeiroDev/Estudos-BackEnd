import prismaClient from "../prisma/prismaClient";

interface Customer {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: Customer) {
    if (!name || !email) {
      throw new Error("É necessário prencher os campos");
    }

    const client = await prismaClient.customers.create({
      data: {
        name,
        email,
        status: true,
      },
    });
    return client;
  }
}
export { CreateCustomerService };
