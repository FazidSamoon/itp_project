import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  customertName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhonenumber: {
    type: String,
    required: true,
  },
  customerAddress: {
    type: String,
    required: true,
  },
  customerRanking: {
    type: String,
    enum: ['LOYAL', 'REGULAR']
  }
});

const customerModel = mongoose.model("Customer", customerSchema);
export default customerModel;
