import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
    {
        eventName: {
            type: String,
            required: true
        },
        eventDescription: {
            type: String
        },
        eventType: {
            type: String,
            required: true
        },
        eventspace: {
            type: String,
            required: true
        },
        startingDate: {
            type: Date,
            required: true
        },
        endingDate: {
            type: Date,
            required: true
        },
        eventplanPrice: {
            type: Number,
            required: true
        },
        /*extraFacilities: {
            type: [
                {
                    facilitytype: {
                        type: String,
                        required: true
                    },
                    price: {
                        type: Number,
                        required: true
                    },
                    available: {
                        type: Boolean,
                        default: true
                    }
                }
            ]
        },*/
    },
    { timestamps: true }
);

const eventModel = mongoose.model('Event', eventSchema);
export default eventModel;
