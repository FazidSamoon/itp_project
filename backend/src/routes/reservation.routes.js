import Express from 'express';
import { createReservation, getAllReservation, getReservationById, updateReservation, deleteReservation } from '../controllers/reservation';
const resRouter = Express.Router();

resRouter.post('/', createReservation);
resRouter.get('/', getAllReservation);
resRouter.get('/:id', getReservationById);
resRouter.put('/:id', updateReservation);
resRouter.delete('/:id', deleteReservation);

export default resRouter;
