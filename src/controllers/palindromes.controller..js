import { calculatePalindromesService } from "../services/palindromes.service";
const calculatePalindromesController = (request, response) => {
  const { message, status } = calculatePalindromesService(request.body);
  return response.status(status).json(message);
};

export { calculatePalindromesController };
