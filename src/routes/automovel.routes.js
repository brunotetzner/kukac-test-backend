import { Router } from "express";

const routes = Router();
import {
  createCarController,
  createMotoController,
} from "../controllers/automovel.controller";
import { validateKeysCarMiddleware } from "../middlewares/validateKeysCar.middleware";
import { validateKeysMotorcicleMiddleware } from "../middlewares/validateKeysMotorcicle.middleware";

routes.post("/automoveis/car", validateKeysCarMiddleware, createCarController);
routes.post(
  "/automoveis/motorcycle",
  validateKeysMotorcicleMiddleware,
  createMotoController
);

export default routes;
