import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    inventoryName: {
      type: String,
      required: true,
    },
    supplierName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      minimum: 0
    },
    expirationDate: { 
      type: Date,
    },
    receivedDate: {
      type: Date,
      required: true,
    },
    inventoryType: {
      type: String,
      enum: ["FOOD", "FURNITURE"]
    },
    unitPrice: {
      type: Number,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String
    }
  },
  { timestamps: true }
);

const inventoryModel = mongoose.model("Inventory", inventorySchema);
export default inventoryModel;
