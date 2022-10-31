import { badRequest } from "../errors/badRequest.js";
import {
  createCustomer,
  getCustomer,
  getAllCustomer,
  getCustomerBYID,
  updateCustomer,
  deleteCustomer,
} from "../repositary/customerRepo";

export const createCustomerServices = async (body) => {
  try {
    const response = await createCustomer(body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getAllCustomerService = async (filters) => {
  try {
    const response = await getAllCustomer(filters)
    return response
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getCustomerByIDServices = async (id) => {
  try {
    const response = await getCustomerBYID(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateCustomerServices = async (id, body) => {
  const { customertName } = body;
  try {
    const user = await getCustomer({ customertName: customertName });
    if (user) return { status: 400, message: "Customer name already in use... Please try with another name..."};
    const response = await updateCustomer(id, body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteCustomerService = async (id) => {
  try {
    const response = await deleteCustomer(id)
    return response
  } catch (error) {
    throw new badRequest(error.message);
  }
}
