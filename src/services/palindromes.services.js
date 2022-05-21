const calculatePalindromesService = ({ initialValue, finalValue }) => {
  let palindromes = [];
  for (let i = initialValue; i < finalValue; i++) {
    const reverseNum = Number(i.toString().split("").reverse().join(""));
    if (reverseNum === i) {
      palindromes.push(i);
    }
  }

  return { status: 200, message: { palindromes: palindromes } };
};

export { calculatePalindromesService };
