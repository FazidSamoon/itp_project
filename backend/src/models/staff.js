import mongoose, { Mongoose } from "mongoose";

const StaffSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide the firstname"],
    },
    lastname: {
        type: String,
        required: [true, "Please provide the lastname"],
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        enum: ["ACCOUNTANT", "INVENTORY MANAGER", "CUSTOMER CARE MANAGER"]
    },
    nic: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true})

const staffModel = mongoose.model("Staff", StaffSchema)
export default staffModel