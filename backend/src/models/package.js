import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    packageID: {
      type: String,
      required: [true, "Enter the package ID"],
    },

    packageCategory: {
      type: String,
      required: [true, "Please provide the category of package"],
    },

    description: {
      type: String,
      required: [true, "provide relevant information"],
    },

    termsAndConditions: {
      type: String,
      required: false,
    },

    validDates: {
      type: Number,
      required: true,
    },

    RoomDetails: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
  },

  { timestamps: true }
);

const packageModel = mongoose.model("Package", packageSchema);
export default packageModel;
