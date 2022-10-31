import { badRequest } from '../errors/badRequest';

import { createEventItemService, getAllEventItemsService, getEventItemByIdService, updateEventItemService, deleteEventItemService } from '../services/eventServices';

import { makeResponse } from '../utils/response';

export const createEventItem = async (req, res) => {
    try {
        const response = await createEventItemService(req.body);
        if (!response) return makeResponse({ 
            res,
            status: 400,
            message: 'Event Item cannot be created'
        });
        if (response.status) return makeResponse({ res, ...response })
        return makeResponse ({ 
            res,
            status: 200,
            data: response,
            message: 'Successfully created an event item',
        }) ;
    } catch (error) {
        console.log(error);
    }
};

export const getAllEventItems = async (req, res) => {
    const query = req.query
    try {
      const response = await getAllEventItemsService(query);
      if (!response) {
      return makeResponse({
        res,
        status: 400,
        message: 'could not fetch event items'
      });
    } 
    return makeResponse({
        res,
        status: 200,
        data: response,
        message: 'successfully fetched event items'
      });
    } 
    catch (error) {
      throw new badRequest(error.message);
    }
};
  
export const getEventItemById = async (req, res) => {
    const id = req.params.id;

    try {
      const response = await getEventItemByIdService(id);
      if (!response) {
      return makeResponse({
        res,
        status: 400,
        message: 'could not fetch event items'
      });
    } 
    return makeResponse({
        res,
        status: 200,
        data: response,
        message: 'successfully fetched event items by id',
      });
    } 
    catch (error) {
      throw new badRequest(error.message);
    }
};
  
export const updateEventItem = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
      const response = await updateEventItemService(id, body);
      if (!response) {
      return makeResponse({
        res,
        status: 400,
        message: 'event item cannot be updated'
      });
    } 
    return makeResponse({
        res,
        status: 200,
        data: response,
        message: 'event item successfully updated'
      });
    } 
    catch (error) {
      throw new badRequest(error.message);
    }
};
  
export const deleteEventItem = async (req, res) => {
    const id = req.params.id;

    try {
      const response = await deleteEventItemService(id);
      if (!response) 
      return makeResponse({
        res,
        status: 400,
        message: 'event item cannot be deleted'
      });
    return makeResponse({
        res,
        status: 200,
        data: response,
        message: 'event item successfully deleted'
      });
    } 
    catch (error) {
      throw new badRequest(error.message);
    }
};
  