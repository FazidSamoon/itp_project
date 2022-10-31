import reservationModel from '../models/reservation';

export const createReservation = async (body) => {
    const response = await reservationModel.create(body);
    if (!response) {
        return makeResponse(res, 404, null, 'Reservation not created');
    } else {
        return response;
    }
};

export const getAllReservations = async (req, res) => {
    const reservations = await reservationModel.find();
    if (!reservations) {
        return makeResponse(res, 404, null, 'Reservations not found');
    } else {
        return reservations;
    }
};

export const getReservationById = async (id) => {
    const reservation = await reservationModel.findById(id);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const updateReservation = async (id, body) => {
    const reservation = await reservationModel.findByIdAndUpdate(id, body);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const deleteReservation = async (id) => {
    const reservation = await reservationModel.findByIdAndDelete(id);
    console.log(reservation);
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const getReservationByUserId = async (req, res) => {
    const reservation = await reservationModel.find({ userId: req.params.id });
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};

export const getavailableRooms = async (req, res) => {
    const reservation = await reservationModel.find({ userId: req.params.id });
    if (!reservation) {
        return makeResponse(res, 404, null, 'Reservation not found');
    } else {
        return reservation;
    }
};
