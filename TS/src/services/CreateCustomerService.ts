import prismaClient from "../prisma/prismaClient";

interface Customer {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: Customer) {
    console.log("Services");
    return { client: [name, email] };
  }
}
export { CreateCustomerService };
