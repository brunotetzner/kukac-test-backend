import { writeFileSync } from "fs";
import { join } from "path";
import { ICar, IMoto } from "../interfaces/automoveis";

const addVeiculoInDB = (newVeiculo: ICar | IMoto) => {
  const veiculos = require("../database/automoveis.json");
  const newJson = [...veiculos, newVeiculo];
  const diretoryToSaveJSON = join(__dirname, "../database");
  const searchForJSONArchive = join(diretoryToSaveJSON, "automoveis.json");

  const jsonifyVariable = JSON.stringify(newJson);
  writeFileSync(searchForJSONArchive, jsonifyVariable);
};

export { addVeiculoInDB };
