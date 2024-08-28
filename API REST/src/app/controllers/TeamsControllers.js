import TeamsRepositories from "../repositories/TeamsRepositories.js";

class TeamsControllers {
  async index(req, res) {
    let result = await TeamsRepositories.findAll();
    res.json(result);
  }

  async show(req, res) {
    let result = await TeamsRepositories.findById(req.params.id);
    res.json(result);
  }

  async store(req, res) {
    let result = await TeamsRepositories.create(req.body);
    res.json(result);
  }

  async delete(req, res) {
    let result = await TeamsRepositories.delete(req.params.id);
    res.json(result);
  }

  async update(req, res) {
    let result = await TeamsRepositories.update(req.params.id, req.body);
    res.json(result);
  }
}

export default new TeamsControllers();
