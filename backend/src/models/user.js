import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
      minlength: 8,
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    photoURL: {
      type: String,
      required: false,
    },
    staff: {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Staff"
    },
    nic: {
      type: String
    }
  },
  { timestamps: true }
);

const userModel = Mongoose.model("User", userSchema);
export default userModel;
