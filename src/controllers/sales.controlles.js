import { calculateSaleService } from "../services/sales.services";

const calculateSaleController = (request, response) => {
  const { message, status } = calculateSaleService(request.body);
  return response.status(status).json(message);
};
export { calculateSaleController };
