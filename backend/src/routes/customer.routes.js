import Express from "express";
import {
  createCustomerDetails,
  deleteCustomer,
  getAllCustomer,
  getCustomerBYID,
  updateCustomer,
} from "../controllers/customer";
const customerRoute = Express.Router();

customerRoute.get("/", getAllCustomer);
customerRoute.get("/:id", getCustomerBYID);
customerRoute.post("/", createCustomerDetails);
customerRoute.patch("/:id", updateCustomer);
customerRoute.delete("/:id", deleteCustomer);

export default customerRoute;
