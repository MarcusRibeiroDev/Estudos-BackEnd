import express, { Application } from "express";
import routes from "./routes";

// Colocando o express no padrão jsons
const app: Application = express();
app.use(express.json());

// Rotas do projeto
app.use(routes);

export default app;
