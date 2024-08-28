import crypto from "crypto";
import readline from "readline";

// Cria interface para leitura da entrada do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Faz uma pergunta ao usuário
rl.question("O que você quer escrever? ", (mensagem) => {
  const originalHash = crypto.createHash("sha256");
  const originalRes = originalHash.update("Marcus2020@").digest("hex");

  const hash = crypto.createHash("sha256");
  const res = hash.update(mensagem).digest("hex");

  console.log(`Hash da mensagem: ${res}`);

  if (originalRes === res) {
    console.log("Sucesso na autenticação");
  } else {
    console.log("Falha na autenticação");
  }

  rl.close(); // Fecha a interface após processar a res
});
