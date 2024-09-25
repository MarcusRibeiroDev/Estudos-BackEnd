import prisma from "../prisma/prismaClient";

class DeleteCustomerService {
  async execute(id: string) {
    if (!id) {
      throw new Error("Contatar equipe de suporte");
    }

    await prisma.customers.delete({
      where: {
        id,
      },
    });

    return `Cliente id: ${id} foi deletado com sucesso!`;
  }
}

export { DeleteCustomerService };
