import eventModel from '../models/event';
import { badRequest } from "../errors/badRequest";

export const createEventItemRepo = async (item) => {
  try {
    const response = await eventModel.create(item);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getAllEventItemsRepo = async (query) => {
  const { eventName, eventType, eventspace, eventplanPrice } = query;
  let object ={};
  
  if (eventName) {
    object.eventName = eventName;
  }
  if (eventType) {
    object.eventType = eventType;
  }
  if (eventspace) {
    object.eventspace = eventspace;
  }
  if (eventplanPrice) {
    object.eventplanPrice = eventplanPrice;
  }

    const response = await eventModel.find(object);

    return response;
  };

export const getEventItemByIdRepo = async (id) => {
  try {
    const response = await eventModel.findById(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updateEventItemRepo = async (id, body) => {
  try {
    const response = await eventModel.findByIdAndUpdate(id, body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deleteEventItemRepo = async (id) => {
  try {
    const response = await eventModel.findByIdAndDelete(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

/**export const findEventItemRepo = async (filter) => {
  console.log(filter);
  try {
    const response = await eventModel.findOne(filter);
    console.log(response);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};
**/
