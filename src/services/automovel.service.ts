import { ICar, IMoto } from "../interfaces/automoveis";
import { Carro, Moto } from "../classes/automoveis";
import { addVeiculoInDB } from "../utils/writeJson";

const createCarService = ({
  model,
  fabricationYear,
  peopleQuantity,
  mark,
  portsQuantity,
}: ICar) => {
  const car = new Carro(
    model,
    fabricationYear,
    peopleQuantity,
    mark,
    portsQuantity
  );

  addVeiculoInDB(car);

  return { message: car, status: 201 };
};

const createMotoService = ({
  model,
  fabricationYear,
  peopleQuantity,
  mark,
  wheels,
  passengers,
}: IMoto) => {
  const moto = new Moto(
    model,
    fabricationYear,
    peopleQuantity,
    mark,
    wheels,
    passengers
  );

  addVeiculoInDB(moto);

  return { message: moto, status: 201 };
};

export { createCarService, createMotoService };
