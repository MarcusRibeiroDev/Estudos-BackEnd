import TeamsRepositories from "../repositories/TeamsRepositories.js";

class TeamsControllers {
  async index(req, res) {
    try {
      let result = await TeamsRepositories.findAll();
      res.json(result);
    } catch (error) {
      console.error("Erro ao recuperar times:", error);
      res.status(500).json({ message: "Erro ao recuperar times" });
    }
  }

  async show(req, res) {
    try {
      let result = await TeamsRepositories.findById(req.params.id);
      res.json(result);
    } catch (error) {
      console.error("Erro ao recuperar time:", error);
      res.status(500).json({ message: "Erro ao recuperar time" });
    }
  }

  async store(req, res) {
    try {
      let result = await TeamsRepositories.create(req.body);
      res.status(201).json(result); // 201 para criação
    } catch (error) {
      console.error("Erro ao cadastrar novo time:", error);
      res.status(500).json({ message: "Erro ao cadastrar novo time" });
    }
  }

  async delete(req, res) {
    try {
      let result = await TeamsRepositories.delete(req.params.id);
      res.status(200).json({ message: "Time deletado com sucesso", result });
    } catch (error) {
      console.error("Erro ao deletar time:", error);
      res.status(500).json({ message: "Erro ao deletar time" });
    }
  }

  async update(req, res) {
    try {
      let result = await TeamsRepositories.update(req.params.id, req.body);
      res.status(200).json({ message: "Time atualizado com sucesso", result });
    } catch (error) {
      console.error("Erro ao atualizar time:", error);
      res.status(500).json({ message: "Erro ao atualizar time" });
    }
  }
}

export default new TeamsControllers();
