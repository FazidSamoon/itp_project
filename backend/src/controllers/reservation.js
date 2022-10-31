import { badRequest } from '../errors/badRequest';
import { createReservationService, getAllReservationsService, getReservationByIdService, updateReservationService, deleteReservationService, getReservationByUserIdService } from '../services/reservationServices';
import { makeResponse } from '../utils/response';

export const createReservation = async (req, res) => {
    try {
        const reservation = await createReservationService(req.body);
        if (!reservation) return makeResponse({ res, status: 500, message: 'reservation creation failed' });
        return makeResponse({ res, status: 200, data: reservation, message: 'Successfully created reservation.' });
    } catch (error) {
        console.log(error);
        throw new badRequest(error);
    }
};

export const getAllReservation = async (req, res) => {
    try {
        const reservations = await getAllReservationsService();
        if (!reservations) return makeResponse({ res, status: 500, message: 'reservation recieve failed' });
        makeResponse({ res, status: 200, data: reservations, message: 'Successfully recieved reservations.' });
    } catch (error) {
        console.log(error);
        throw new badRequest(error);
    }
};
export const getReservationById = async (req, res) => {
    const { id } = req.params;
    try {
        const reservation = await getReservationByIdService(id);
        if (!reservation) {
            return makeResponse({ res, status: 500, message: 'reservation recieve failed' });
        } else {
            console.log(reservation);
            return makeResponse({ res, status: 200, data: reservation, message: 'Successfully recieved reservation.' });
        }
    } catch (error) {
        throw new badRequest(error);
    }
};

export const updateReservation = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const reservation = await updateReservationService(id, body);
    if (!reservation) {
        return makeResponse({ res, status: 500, message: 'reservation update failed' });
    } else {
        return makeResponse({ res, status: 200, data: reservation, message: 'Successfully updated reservation.' });
    }
};

export const deleteReservation = async (req, res) => {
    const { id } = req.params;
    const reservation = await deleteReservationService(id);
    if (!reservation) {
        return makeResponse({ res, status: 500, message: 'reservation delete failed' });
    } else {
        return makeResponse({ res, status: 200, data: reservation, message: 'Successfully deleted reservation.' });
    }
};

export const getReservationByUserId = async (req, res) => {
    const reservation = await getReservationByUserIdService({ userId: req.params.id });
    if (!reservation) {
        return makeResponse({ res, status: 500, message: 'reservation recieve failed' });
    } else {
        return makeResponse({ res, status: 200, data: reservation, message: 'Successfully recieved reservation.' });
    }
};
