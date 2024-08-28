import express from "express";
import { myFS } from "./index.js";

const index = express();

const PORT = process.env.PORT || 3000;

// index.listen(PORT, () => {
//   console.log(`O servidor na porta:${PORT} está rodando...`);
// });

// index.get("/", (req, res) => {
//   myFS.read(res);
// });

myFS.renameExample(
  "testDirectory/newDirectory.txt",
  "testDirectory/testDirectory.html"
);
