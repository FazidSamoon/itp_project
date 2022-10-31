import { createBilling, getBillingById, getAllBilling, deleteBilling, updateBilling } from '../repositary/billingRepo.js';
import { badRequest } from '../errors/badRequest.js';

export const createBillingServices = async (data) => {
    try {
        const response = await createBilling(data);
        if (!response) return { status: 400, message: 'Something went wrong...' };
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getBillingByIdServices = async (id) => {
    try {
        const response = await getBillingById(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllBillingServices = async (queries) => {
    try {
        const response = await getAllBilling(queries);
        return response;
    } catch (error) {
        console.log(error);
        throw new badRequest(error.message);
    }
};

export const updateBillingServices = async (id, body) => {
    const { billingName } = body;
    try {
        const response = await updateBilling(id, body);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteBillingServices = async (id) => {
    try {
        const response = await deleteBilling(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};
