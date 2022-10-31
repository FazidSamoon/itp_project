import { createBillingServices, getBillingByIdServices, getAllBillingServices, updateBillingServices, deleteBillingServices } from '../services/billingServices.js';
import { makeResponse } from '../utils/response.js';
import { badRequest } from '../errors/badRequest.js';

export const createBillingDetails = async (req, res) => {
    try {
        const response = await createBillingServices(req.body);
        if (!response) return makeResponse({ res, status: 500, message: 'Billing creation process failed' });
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Successfully created billing details.....' });
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllBilling = async (req, res) => {
    try {
        const response = await getAllBillingServices(req.query);
        if (!response) return makeResponse({ res, status: 500, message: 'Billing retreiving process failed' });
        makeResponse({ res, status: 200, data: response, message: 'Successfully retrieved billing details.....' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getBillingById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getBillingByIdServices(id);
        if (!response) return makeResponse({ res, status: 500, message: `Billing does not exists with the id ${id}` });
        makeResponse({ res, status: 200, data: response, message: 'Successfully fetched the billing detail' });
    } catch (error) {
        console.log(error);
        throw new badRequest(error.message);
    }
};

export const updateBilling = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const response = await updateBillingServices(id, body);
        if (!response) return makeResponse({ res, status: 500, message: 'Billing update process failed' });
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Billing details updated successfully...' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteBlling = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteBillingServices(id);
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Billing details deleted successfully...' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};
