import { badRequest } from '../errors/badRequest.js';
import { createInventory, deleteInventory, getAllInventories, getInventory, getInventoryByID, getOneStockRelease, getRequestedStocks, releaseStocks, updateInventory, updateStockDetails } from '../repositary/inventoryRepo.js';

export const createInventoryServices = async (data) => {
    try {
        const inventory = await getInventory({ inventoryName: data.inventoryName });
        if (inventory) return { status: 400, message: 'Inventory name already in use... Please try with another name...' };
        const response = await createInventory(data);
        return response;
    } catch (error) {
        throw new badRequest(error);
    }
};

export const getAllInventoryServices = async (queries) => {
    try {
        const response = await getAllInventories(queries);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getInventoryByIDServices = async (id) => {
    try {
        const response = await getInventoryByID(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateInventoryServices = async (id, body) => {
    const { inventoryName } = body;
    try {
        const inventory = await getInventory({ inventoryName: inventoryName });
        if (inventory) return { status: 400, message: 'Inventory name already in use... Please try with another name...' };
        const response = await updateInventory(id, body);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteInventoryServices = async (id) => {
    try {
        const inventory = await getInventory({ _id: id });
        if (!inventory) return { status: 400, message: 'Inventory with the given id not exists...' };
        const response = await deleteInventory(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const releaseStocksRequestServices = async (body, id, staff) => {
    const {quantity, departmentName} = body
    const { _id: staffID } = staff;
    try {
        if (!quantity || !departmentName) return {status: 400, message: "Please fill required fields"}
        const existingInventory = await getInventory({ _id: id });
        if (!existingInventory) return { status: 400, message: 'Inventory with the given id not exists...' };
        if (existingInventory.quantity < body.quantity) return { status: 400, message: 'Inventory avilablity less than requested.' };
        const response = await releaseStocks({ body, id, staffID });
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const handleStockReleaseServices = async (id, status) => {
    try {
        const STOCK_TO_BE_RELEASED = await getOneStockRelease(id);
        const { quantity, stockId } = STOCK_TO_BE_RELEASED;
        const response = await updateStockDetails({ quantity, status, stockId, id });
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllRequestedStocksService = async () => {
    const response = await getRequestedStocks();
    return response;
};
