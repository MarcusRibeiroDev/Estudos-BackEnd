const http = require("http");
const express = require("express");
const jwt = require("jsonwebtoken");
const SECRET = "marcus2020@";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "GET ok" });
});

app.get("/clients", (req, res) => {
  res.json([
    { name: "Marcus", idade: 22 },
    { name: "Carlos", idade: 22 },
  ]);
});

app.post("/login", (req, res) => {
  if (req.body.user === "Marcus" && req.body.password === "12454") {
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
    return res.json({ auth: true, token });
  }

  return res.status(401).end();
});

app.post("/logout", (req, res) => {
  res.end();
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
