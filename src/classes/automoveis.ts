import { v4 as uuid } from "uuid";
class Veiculo {
  id: string;
  model: string;
  fabricationYear: Date;
  peopleQuantity: number;
  mark: string;

  constructor(
    model: string,
    fabricationYear: Date,
    peopleQuantity: number,
    mark: string
  ) {
    this.model = model;
    this.fabricationYear = fabricationYear;
    this.peopleQuantity = peopleQuantity;
    this.mark = mark;
    this.id = uuid();
  }
}

class Carro extends Veiculo {
  portsQuantity: number;

  constructor(
    model: string,
    fabricationYear: Date,
    peopleQuantity: number,
    mark: string,
    portsQuantity: number
  ) {
    super(model, fabricationYear, peopleQuantity, mark);
    this.portsQuantity = portsQuantity;
  }
}

class Moto extends Veiculo {
  wheels: number;

  constructor(
    model: string,
    fabricationYear: Date,
    peopleQuantity: number,
    mark: string,
    wheels: number = 2
  ) {
    super(model, fabricationYear, peopleQuantity, mark);
    this.wheels = wheels;
  }
}

export { Moto, Carro };
