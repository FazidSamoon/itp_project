import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected succesfully"))
    .catch((err) => console.log(err));

  mongoose.connection.on("disconnected", () => {
    console.log("Mongo DB disconnected");
  });
  mongoose.connection.on("connected", () => {
    console.log("Mongo DB connected");
  });
};

export default connectDB;
