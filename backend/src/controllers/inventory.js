import { badRequest } from '../errors/badRequest.js';
import {
    createInventoryServices,
    deleteInventoryServices,
    getAllInventoryServices,
    getAllRequestedStocksService,
    getInventoryByIDServices,
    handleStockReleaseServices,
    releaseStocksRequestServices,
    updateInventoryServices
} from '../services/inventoryServices.js';
import { makeResponse } from '../utils/response.js';

export const createInventoryDetails = async (req, res) => {
    try {
        const response = await createInventoryServices(req.body);
        if (!response) return makeResponse({ res, status: 500, message: 'Inventory creation process failed' });
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Successfully created inventory details.....' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllInventories = async (req, res) => {
    try {
        const response = await getAllInventoryServices(req.query);
        if (!response) return makeResponse({ res, status: 500, message: 'Inventory retreiving process failed' });
        makeResponse({ res, status: 200, data: response, message: 'Successfully retrieved inventory details.....' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getInventoryBYID = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await getInventoryByIDServices(id);
        if (!response) return makeResponse({ res, status: 500, message: `Inventory does not exists with the id ${id}` });
        makeResponse({ res, status: 200, data: response, message: 'Successfully fetched the inventory detail' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateInventory = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    try {
        const response = await updateInventoryServices(id, body);
        if (!response) return makeResponse({ res, status: 500, message: 'Inventory update process failed' });
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Inventory details updated successfully...' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteInventory = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await deleteInventoryServices(id);
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Inventory details deleted successfully...' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

//TODO --> update the function with populating the user with the id wich set to the req at the rbac
export const requestStocks = async (req, res) => {
    const body = req.body;
    const { id } = req.params;
    const { staff } = req.user;
    try {
        const response = await releaseStocksRequestServices(body, id, staff);
        if (response.status) return makeResponse({ res, ...response });

        makeResponse({ res, status: 200, data: response, message: 'Inventory request details created successfully...' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

//deduct stocks count based on is_Approved field
export const handleStockRelease = async (req, res) => {
    const { id } = req.params;
    const { requestStatus } = req.body;
    try {
        const response = await handleStockReleaseServices(id, requestStatus);
        if (!response) return makeResponse({ res, status: 500, message: 'Inventory release process failed' });
        if (response.status) return makeResponse({ res, ...response });
        makeResponse({ res, status: 200, data: response, message: 'Inventory released successfully...' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllRequestedStocks = async (req, res) => {
    try {
        const response = await getAllRequestedStocksService();
        if (!response) return makeResponse({ res, status: 500, message: 'process failed something went wrong' });
        makeResponse({ res, status: 200, data: response, message: 'Retrieved data successfully' });
    } catch (error) {
        throw new badRequest(error.message);
    }
};


//display inventory releasing details regarding to a specific department on a given date range 
export const inventoryStats = async (req, res) => {
    res.status(200).send('inventory stats route');
};
