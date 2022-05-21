import { Router } from "express";

const routes = Router();
import { calculatePalindromesController } from "../controllers/palindromes.controller.";

routes.post("/palindromes", calculatePalindromesController);

export default routes;
