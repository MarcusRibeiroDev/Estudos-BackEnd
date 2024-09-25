import prisma from "../prisma/prismaClient";

class ListCustomerServices {
  async execute() {
    const allCustormers = prisma.customers.findMany();
    return allCustormers;
  }
}

export { ListCustomerServices };
