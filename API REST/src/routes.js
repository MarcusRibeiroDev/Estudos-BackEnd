import { Router } from "express";
import TeamsControllers from "./app/controllers/TeamsControllers.js";

const routes = Router();

// Lista todos
routes.get("/times", TeamsControllers.index);

// Lista individual
routes.get("/times/:id", TeamsControllers.show);

// Cadastra/Posta individual
routes.post("/times", TeamsControllers.store);

// Deleta individual
routes.delete("/times/:id", TeamsControllers.delete);

// Atualiza individual
routes.put("/times/:id", TeamsControllers.update);

export default routes;
