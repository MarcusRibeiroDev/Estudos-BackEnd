import { makeRequest } from "../database/conection.js";

class TeamsRepositories {
  findAll() {
    return makeRequest(
      "SELECT * FROM db_team.teams;",
      "Não foi possível recuperar todos os times"
    );
  }

  findById(id) {
    return makeRequest(
      "SELECT * FROM db_team.teams WHERE id=?;",
      "Não foi possível recuperar o time específico",
      id
    );
  }

  create(newTeam) {
    let sql = "INSERT INTO db_team.teams SET ?;";
    return makeRequest(
      "INSERT INTO db_team.teams SET ?;",
      "Não foi possível cadastrar um novo time",
      newTeam
    );
  }

  delete(id) {
    return makeRequest(
      "DELETE FROM db_team.teams WHERE id=?;",
      "Não foi possível deletar o time",
      id
    );
  }

  update(id, newTeam) {
    return makeRequest(
      "UPDATE db_team.teams SET ? WHERE id=?;",
      "Não foi possível atualizar informações do time",
      [newTeam, id]
    );
  }
}

export default new TeamsRepositories();
