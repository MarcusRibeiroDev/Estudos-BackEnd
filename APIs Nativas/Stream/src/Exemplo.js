//const fs = require("fs");
import fs from "fs";

// Cria uma stream de leitura a partir do arquivo grande
const readableStream = fs.createReadStream("large-file.txt", {
  encoding: "utf8",
});

// // Escreve o conteúdo do arquivo no console
// readableStream.pipe(process.stdout);

// Stream de escrita para outro arquivo
// const writableStream = fs.createWriteStream("empty-file.txt");

readableStream.on("end", () => {
  // Limpar o arquivo sobrescrevendo com uma string vazia
  fs.writeFile("large-file.txt", "", (err) => {
    if (err) throw err;
    console.log("Arquivo limpo!");
  });
});

// readableStream.pipe(writableStream);

// // Adiciona um listener para o caso de erros durante a leitura
// readableStream.on("error", (err) => {
//   console.error("Erro ao ler o arquivo:", err);
// });

readableStream.on("data", () => {
  console.log("Nova chunk lida!");
});

// // Adiciona um listener para o evento 'finish', indicando que a gravação foi concluída
// writableStream.on("finish", () => {
//   console.log("Arquivo gravado com sucesso!");
// });

// // Adiciona um listener para tratar possíveis erros durante a gravação
// writableStream.on("error", (err) => {
//   console.error("Erro ao gravar o arquivo:", err);
// });
