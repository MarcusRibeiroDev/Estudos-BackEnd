import { makeRequest } from "../database/conection.js";

class TeamsRepositories {
  findAll(): Promise<> {
    return makeRequest(
      "SELECT * FROM db_team_ts.teams_ts;",
      "Não foi possível recuperar todos os times"
    );
  }

  findById(id) {
    return makeRequest(
      "SELECT * FROM db_team_ts.teams_ts WHERE id=?;",
      "Não foi possível recuperar o time específico",
      id
    );
  }

  create(newTeam) {
    let sql = "INSERT INTO db_team_ts.teams_ts SET ?;";
    return makeRequest(
      "INSERT INTO db_team_ts.teams_ts SET ?;",
      "Não foi possível cadastrar um novo time",
      newTeam
    );
  }

  delete(id) {
    return makeRequest(
      "DELETE FROM db_team_ts.teams_ts WHERE id=?;",
      "Não foi possível deletar o time",
      id
    );
  }

  update(id, newTeam) {
    return makeRequest(
      "UPDATE db_team_ts.teams_ts SET ? WHERE id=?;",
      "Não foi possível atualizar informações do time",
      [newTeam, id]
    );
  }
}

export default new TeamsRepositories();
