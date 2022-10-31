import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
  billingName: {
    type: String,
    required: true,
  },

  paymentDate: {
    type: Date,
  },

  description: {
    type: String,
  },
  
  customerName: {
    type: String,
  },

  customerEmail: {
    type: String,
  },
  
  clientAddress: {
    type: Object,
  },
  
  total: {
    type: Number,
  },
}, {timestamps: true});

const billingModel = mongoose.model("Billing", billingSchema);
export default billingModel;
