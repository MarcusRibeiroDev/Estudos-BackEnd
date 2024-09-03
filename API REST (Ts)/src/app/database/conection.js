import mysql from "mysql";

const conection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "Marcus2020@",
  database: "db_team_ts",
});

conection.connect();

/**
 * Executa uma instrução SQL e retorna uma Promise com o resultado.
 *
 * @param {string} sql - A instrução SQL a ser executada.
 * @param {string} msg - Mensagem de feedback em caso de erro na execução da instrução SQL.
 * @param {(string|Array<(string|Object)>)} [values=""] - Pode ser uma string representando um id ou um objeto com propriedades de um novo time. A segunda opção seria um array com os dois valores citados.
 * @returns {Promise<Object>} - Uma Promise que resolve com o resultado da consulta SQL ou rejeita com a mensagem de erro especificada.
 */
export const makeRequest = (sql, msg, values = "") => {
  return new Promise((resolve, reject) => {
    conection.query(sql, values, (error, result) => {
      if (error) return reject(msg);
      const res = JSON.parse(JSON.stringify(result));
      return resolve(res);
    });
  });
};

export default conection;
