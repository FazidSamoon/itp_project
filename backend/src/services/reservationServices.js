import { createReservation, getAllReservations, getReservationById, updateReservation, deleteReservation, getReservationByUserId } from '../repositary/reservationRepositary';
import { makeResponse } from '../utils/response';

export const createReservationService = async (reservationBody) => {
    const reservation = await createReservation(reservationBody);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not created');
    } else {
        return reservation;
    }
};

export const getAllReservationsService = async (req, res) => {
    const reservations = await getAllReservations();
    if (!reservations) {
        return makeResponse(res, 404, null, 'Reservations not found');
    } else {
        return reservations;
    }
};
export const getReservationByIdService = async (id) => {
    const reservation = await getReservationById(id);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const updateReservationService = async (id, body) => {
    const reservation = await updateReservation(id, body);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const deleteReservationService = async (id) => {
    const reservation = await deleteReservation(id);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const getReservationByUserIdService = async (req, res) => {
    const reservation = await getReservationByUserId({ userId: req.params.id });
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};
