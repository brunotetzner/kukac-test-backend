import { Router } from "express";

const routes = Router();
import { calculateSaleController } from "../controllers/sales.controlles";

routes.post("/sales", calculateSaleController);

export default routes;
