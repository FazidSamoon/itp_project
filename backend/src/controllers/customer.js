import { badRequest } from "../errors/badRequest.js";
import {
  createCustomerServices,
  deleteCustomerService,
  getAllCustomerService,
  getCustomerByIDServices,
  updateCustomerServices,
} from "../services/customerServices.js";
import { makeResponse } from "../utils/response.js";

export const createCustomerDetails = async (req, res) => {
  try {
    const response = await createCustomerServices(req.body);
    if (!response) return makeResponse({ res, status: 500, message: "Create customer process Failed"});
    makeResponse({ res, status: 200, data: response, message: "Successfully created customer details....."});
  } catch (error) {
    throw new badRequest(error);
  }
};

export const getAllCustomer = async (req, res) => {
  try {
    const response = await getAllCustomerService(req.query)
    if (!response) return makeResponse({ res, status: 500, message: "retrieving customer process Failed"});
    makeResponse({ res, status: 200, data: response, message: "Successfully created customer details....."});
  } catch (error) {
    throw new badRequest(error);
  }
};

export const getCustomerBYID = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getCustomerByIDServices(id);
    if (!response) return makeResponse({ res, status: 500, message: `Customer does not exists with the id ${id}`});
    makeResponse({ res, status: 200, data: response, message: "Successfully fetched the Customer details...."});
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const response = await updateCustomerServices(id, body);
    if (!response) return makeResponse({ res, status: 500, message: " update process failed"});
    if (response.status) return makeResponse({ res, ...response });
    makeResponse({ res, status: 200, data: response, message: "Customer details updated successfully..."});
  } catch (error) {
    throw new badRequest(error.message);
  }
};
export const deleteCustomer = async (req, res) => {
  const {id} = req.params
  try {
    const response = await deleteCustomerService(id)
    if (!response) return makeResponse({ res, status: 500, message: 'something went wrong'});
    makeResponse({ res, status: 200, data: response, message: "Successfully deleted Customer details...."});
  } catch (error) {
    throw new badRequest(error.message);
  }
};

