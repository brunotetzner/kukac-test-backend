import { Router } from "express";

const routes = Router();
import { calculatePalindromesController } from "../controllers/palindromes.controller.";

routes.post("/automoveis", calculatePalindromesController);

export default routes;
