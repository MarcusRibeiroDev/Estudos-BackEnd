// Importando os módulos necessários
const http = require("http"); // Módulo HTTP nativo do Node.js
const express = require("express"); // Framework Express para criação de servidores web
const jwt = require("jsonwebtoken"); // Módulo para criação e verificação de tokens JWT
const SECRET = "marcus2020@"; // Chave secreta usada para assinar os tokens JWT

// Definindo a porta do servidor
const PORT = 3000;
const blackList = []; // Lista para armazenar tokens que foram "deslogados" (blacklist)
const app = express(); // Instanciando o servidor Express

app.use(express.json()); // Middleware para processar requisições JSON

// Rota GET para a raiz ("/"), respondendo com uma mensagem simples
app.get("/", (req, res) => {
  res.json({ message: "GET ok" }); // Retorna uma resposta em JSON
});

// Middleware para verificar a validade do token JWT
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"]; // Obtém o token do cabeçalho da requisição
  const index = blackList.findIndex((tk) => tk === token); // Verifica se o token está na blacklist

  // Verifica se o token foi fornecido
  if (!token) return res.status(403).send("Token not provided.");
  // Verifica se o token está na blacklist (token já foi usado em um logout)
  if (index !== -1) return res.status(401).end();

  // Verifica a validade do token
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end(); // Retorna erro 401 se o token for inválido
    req.userId = decoded.userId; // Se o token for válido, salva o userId no request
    next(); // Continua para o próximo middleware
  });
};

// Rota GET para "/clients", protegida pelo middleware de verificação de JWT
app.get("/clients", verifyJWT, (req, res) => {
  console.log(
    `O usuário ${req.userId} fez uma chamada na rota /clients com sucesso!`
  );
  res.json([{ name: "Marcus", idade: 22 }]); // Retorna dados de exemplo em JSON
});

// Rota POST para "/login", onde o usuário faz login e recebe um token JWT
app.post("/login", (req, res) => {
  // Verifica se o nome de usuário e senha estão corretos
  if (req.body.user === "Marcus" && req.body.password === "12454") {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 }); // Cria um token JWT válido por 300 segundos
    return res.json({ auth: true, token }); // Retorna o token ao cliente
  }

  return res.status(401).end(); // Retorna erro 401 se as credenciais estiverem erradas
});

// Rota POST para "/logout", onde o token é colocado na blacklist
app.post("/logout", (req, res) => {
  blackList.push(req.headers["x-access-token"]); // Adiciona o token na blacklist
  res.json({
    message: "Token descartado para Blacklist", // Informa que o token foi invalidado
  });
  res.end(); // Finaliza a resposta
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
