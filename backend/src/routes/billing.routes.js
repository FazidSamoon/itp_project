import Express from 'express';
import { decode } from 'jsonwebtoken';
import { createBillingDetails, deleteBlling, getAllBilling, getBillingById, updateBilling } from '../controllers/billing';
const billingRoute = Express.Router();

billingRoute.get('/', getAllBilling);
billingRoute.get('/:id', getBillingById);
billingRoute.post('/', createBillingDetails);
billingRoute.patch('/:id', updateBilling);
billingRoute.delete('/:id', deleteBlling);

export default billingRoute;
