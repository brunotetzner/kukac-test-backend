import { Request, Response } from "express";
const validateKeysMotorcicleMiddleware = (
  request: Request,
  response: Response,
  next: any
) => {
  const receivedKeys = Object.keys(request.body);
  const obrigatoryKeys = [
    "model",
    "fabricationYear",
    "peopleQuantity",
    "mark",
    "wheels",
  ];

  for (let i = 0; i < obrigatoryKeys.length; i++) {
    const findKey = receivedKeys.find((key) => key === obrigatoryKeys[i]);
    if (!findKey) {
      return response
        .status(400)
        .json([
          { chaves_esperadas: obrigatoryKeys },
          { chaves_recebidas: receivedKeys },
        ]);
    }
  }
  next();
};

export { validateKeysMotorcicleMiddleware };
