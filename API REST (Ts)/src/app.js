import express from "express";
import routes from "./routes.js";

// Colocando o express no padrão json
const app = express();
app.use(express.json());

// Rotas do projeto
app.use(routes);

export default app;
