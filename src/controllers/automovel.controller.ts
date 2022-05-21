import { Request, Response } from "express";
import {
  createCarService,
  createMotoService,
} from "../services/automovel.service";

const createCarController = (request: Request, response: Response) => {
  const { status, message } = createCarService(request.body);

  return response.status(status).json(message);
};

const createMotoController = (request: Request, response: Response) => {
  const { status, message } = createMotoService(request.body);

  return response.status(status).json(message);
};

export { createCarController, createMotoController };
