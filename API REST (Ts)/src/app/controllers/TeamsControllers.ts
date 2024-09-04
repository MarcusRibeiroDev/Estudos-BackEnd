import TeamsRepositories from "../repositories/TeamsRepositories";

class TeamsControllers {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      let result = await TeamsRepositories.findAll();
      return res.json(result);
    } catch (error) {
      console.error("Erro ao recuperar times:", error);
      return res.status(500).json({ message: "Erro ao recuperar times" });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      let result = await TeamsRepositories.findById(req.params.id);
      return res.json(result);
    } catch (error) {
      console.error("Erro ao recuperar time:", error);
      return res.status(500).json({ message: "Erro ao recuperar time" });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      let result = await TeamsRepositories.create(req.body);
      return res.status(201).json(result); // 201 para criação
    } catch (error) {
      console.error("Erro ao cadastrar novo time:", error);
      return res.status(500).json({ message: "Erro ao cadastrar novo time" });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      let result = await TeamsRepositories.delete(req.params.id);
      return res
        .status(200)
        .json({ message: "Time deletado com sucesso", result });
    } catch (error) {
      console.error("Erro ao deletar time:", error);
      return res.status(500).json({ message: "Erro ao deletar time" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      let result = await TeamsRepositories.update(req.params.id, req.body);
      return res
        .status(200)
        .json({ message: "Time atualizado com sucesso", result });
    } catch (error) {
      console.error("Erro ao atualizar time:", error);
      return res.status(500).json({ message: "Erro ao atualizar time" });
    }
  }
}

export default new TeamsControllers();
