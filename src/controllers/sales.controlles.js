import { calculateSaleService } from "../services/sales.service";

const calculateSaleController = (request, response) => {
  const { message, status } = calculateSaleService(request.body);
  return response.status(status).json(message);
};
export { calculateSaleController };
