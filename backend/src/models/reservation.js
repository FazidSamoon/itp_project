import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name']
    },
    email: {
        type: String,
        required: [true, 'please insert an email']
    },
    phoneNumber: {
        type: String
    },
    startingDate: {
        type: Date,
        required: [true, 'please select a starting date']
    },
    endingDate: {
        type: Date,
        required: [true, 'please select an ending date']
    },
    roomNumber: {
        type: Array,
        required: [true, 'please select a room number']
    }
});

const reservationModel = mongoose.model('Reservation', reservationSchema);
export default reservationModel;
