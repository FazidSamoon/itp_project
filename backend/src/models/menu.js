import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
    {
        foodItemName: {
            type: String,
            required: true
        },
        foodItemDescription: {
            type: String
        },

        price: {
            type: Number,
            required: true
        },

        available: {
            type: Boolean
        },
        cuisineType: {
            type: String,
            required: true
        },
        mealType: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        consumption: {
            type: Number
        }
    },
    { timestamps: true }
);

const menuModel = mongoose.model('RestaurantMenu', menuSchema);
export default menuModel;
