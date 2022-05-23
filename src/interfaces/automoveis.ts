interface ICar {
  id: string;
  model: string;
  fabricationYear: Date;
  peopleQuantity: number;
  mark: string;
  portsQuantity: number;
}

interface IMoto {
  id: string;
  model: string;
  fabricationYear: Date;
  peopleQuantity: number;
  mark: string;
  wheels: number;
}
export { ICar, IMoto };
