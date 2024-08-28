import fs from "fs";

// Cria uma stream de leitura para um arquivo imenso
const readableStream = fs.createReadStream("large-file.txt", {
  encoding: "utf8",
  highWaterMark: 100 * 1024,
});

// Evento 'data' é disparado sempre que um novo chunk de dados é lido
readableStream.on("data", (chunk) => {
  console.log("Novo chunk recebido:", chunk.length, "MB");
  //console.log(chunk); // Exibe o chunk (parte do arquivo) no console
});

// Evento 'end' é disparado quando todos os chunks foram lidos
readableStream.on("end", () => {
  console.log("Leitura completa do arquivo.");
});

// Evento 'error' é disparado caso ocorra algum erro durante a leitura
readableStream.on("error", (err) => {
  console.error("Erro ao ler o arquivo:", err);
});
