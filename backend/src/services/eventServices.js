import { createEventItemRepo, getAllEventItemsRepo, getEventItemByIdRepo, updateEventItemRepo, deleteEventItemRepo } from '../repositary/eventRepo';
import { badRequest } from '../errors/badRequest';

export const createEventItemService = async (item) => {
    const { eventName } = item;
    try {
        const response = await createEventItemRepo(item);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllEventItemsService = async (query) => {
    try {
        const response = await getAllEventItemsRepo(query);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getEventItemByIdService = async (id) => {
    try {
        const response = await getEventItemByIdRepo(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateEventItemService = async (id, body) => {
    try {
        const response = await updateEventItemRepo(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteEventItemService = async (id) => {
    try {
        const response = await deleteEventItemRepo(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};
