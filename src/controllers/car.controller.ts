// // import { Request, Response } from "express";
// const createCarController = (request: Request, response: Response) => {
//   return response.status(200).json({ message: "car" });
// };

// export { createCarController };
interface IVeiculo {
  modelo: string;
  anoDeFabricação: Date;
  quantidadeDePessoas: number;
  marca: string;
}
class Veiculo {
  modelo: string;
  anoDeFabricação: Date;
  quantidadeDePessoas: number;
  marca: string;

  constructor(
    modelo: string,
    anoDeFabricação: Date,
    quantidadeDePessoas: number,
    marca: string
  ) {
    (this.modelo = modelo),
      (this.anoDeFabricação = anoDeFabricação),
      (this.quantidadeDePessoas = quantidadeDePessoas);
    this.marca = marca;
  }
}

class Carro extends Veiculo {
  numeroDePortas: number;

  constructor(
    modelo: string,
    anoDeFabricação: Date,
    quantidadeDePessoas: number,
    marca: string,
    numeroDePortas: number
  ) {
    super(modelo, anoDeFabricação, quantidadeDePessoas, marca);
    this.numeroDePortas = numeroDePortas;
  }
}

class Moto extends Veiculo {
  rodas: number;
  passageiros: number;

  constructor(
    modelo: string,
    anoDeFabricação: Date,
    quantidadeDePessoas: number,
    marca: string,
    rodas: number = 2,
    passageiros: number = 1
  ) {
    super(modelo, anoDeFabricação, quantidadeDePessoas, marca);
    this.rodas = rodas;
    this.passageiros = passageiros;
  }
}
