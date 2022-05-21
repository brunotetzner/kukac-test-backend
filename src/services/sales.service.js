const calculateSaleService = ({ saleValue, receivedValue }) => {
  const change = receivedValue - saleValue;
  let oneNote = 0;
  let tenNote = 0;
  let oneHundredNote = 0;
  let valueToAdd = 0;
  for (let i = change; i > 0; i = i - valueToAdd) {
    if (i - 100 >= 0) {
      valueToAdd = 100;
      oneHundredNote += 1;
    } else if (i - 10 >= 0) {
      valueToAdd = 10;
      tenNote += 1;
    } else if (i - 1 >= 0) {
      valueToAdd = 1;
      oneNote += 1;
    } else {
      valueToAdd = i;
    }
  }
  const objToReturn = {
    saleValue: saleValue,
    receivedValue: receivedValue,
    change: change,
    oneNote: oneNote,
    tenNote: tenNote,
    oneHundredNote: oneHundredNote,
  };
  return { status: 200, message: { objToReturn } };
};

export { calculateSaleService };
