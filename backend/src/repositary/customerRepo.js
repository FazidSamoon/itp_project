import Mongoose from "mongoose";
import { badRequest } from "../errors/badRequest.js";
import { notFound } from "../errors/notFound.js";
import customerModel from "../models/customer.js";

export const createCustomer = async (body) => {
  try {
    const response = await customerModel.create(body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getAllCustomer = async (filters) => {
  const {customerRanking, customerAddress} = filters
  let queryObj = {}
  try {
    if(customerRanking) queryObj.customerRanking = customerRanking
    if(customerAddress) queryObj.customerAddress = { $regex: customerAddress, $options: "i" };
    const response = await customerModel.find(queryObj)
    return response
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getCustomerBYID = async (id) => {
  try {
    if (!Mongoose.Types.ObjectId.isValid(id)) throw new notFound("No Customers with given id exists...");
    const response = await customerModel.findById(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getCustomer = async (filters) => {
  return await customerModel.findOne(filters);
};

export const updateCustomer = async (id, body) => {
  try {
    const response = await customerModel.findByIdAndUpdate(
      id, { $set: body }, { new: true }
    );
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteCustomer = async (id) => {
  return customerModel.findByIdAndDelete(id)
}