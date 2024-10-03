const http = require("http");
const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET = "marcus2020@";

const PORT = 3000;
const blackList = [];
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "GET ok" });
});

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"]; // Corrigido headers e x-access-token
  const index = blackList.findIndex((tk) => tk === token);

  if (!token) return res.status(403).send("Token not provided."); // Verifica se o token foi fornecido
  if (index !== -1) return res.status(401).end();

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).end(); // Retorna erro 401 se o token for inválido
    req.userId = decoded.userId; // Adiciona userId à requisição
    next(); // Continua para o próximo middleware
  });
};

app.get("/clients", verifyJWT, (req, res) => {
  console.log(
    `O usuário ${req.userId} fez uma chamada na rota /clients com sucesso!`
  );
  res.json([{ name: "Marcus", idade: 22 }]);
});

app.post("/login", (req, res) => {
  if (req.body.user === "Marcus" && req.body.password === "12454") {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
    return res.json({ auth: true, token });
  }

  return res.status(401).end();
});

app.post("/logout", (req, res) => {
  blackList.push(req.headers["x-access-token"]);
  res.json({ message: "Token descartado para Blacklist" });
  res.end();
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
