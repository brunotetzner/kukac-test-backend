import { Request, Response } from "express";
const validateKeysCarMiddleware = (
  request: Request,
  response: Response,
  next: any
) => {
  const receivedKeys = Object.keys(request.body);
  const obrigatoryKeys = [
    "model",
    "portsQuantity",
    "fabricationYear",
    "peopleQuantity",
    "mark",
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

export { validateKeysCarMiddleware };
