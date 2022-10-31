//IMPORT PACKAGES
import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import cors from 'cors'

//IMORTING FILES
import router from "./routes/index.routes.js";
import connectDB from "./database/connect.js";
import { errorHandlerMiddleware } from "./middleware/errorHandler.js";

//INITALIZING  PACKAGES
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(cors())
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/api/v1", router);

app.use(errorHandlerMiddleware);

try {
  connectDB();
  app.listen(port, () => {
    console.log(`Server successfully started on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
