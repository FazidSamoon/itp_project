import Mongoose from 'mongoose';
import { badRequest } from '../errors/badRequest.js';
import { notFound } from '../errors/notFound.js';
import inventoryModel from '../models/inventory.js';
import releaseStocksModel from '../models/inventoryReleases.js';

export const createInventory = async (data) => {
    try {
        const response = await inventoryModel.create(data);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllInventories = async (queries) => {
    const { supplierName, name, sort, page, limit } = queries;
    let queryObject = {};
    if (name) {
        queryObject.inventoryName = { $regex: name, $options: 'i' };
    }
    if (supplierName) {
        queryObject.supplierName = supplierName;
    }
    let response = inventoryModel.find(queryObject);

    if (sort) {
        let sortList = sort.split(',').join(' ');
        response = response.sort(sortList);
    } else {
        response = response.sort('createdAt');
    }

    //pagination function
    //paginate response based on given page number and limit per the page
    const pages = Number(page) || 1;
    const limits = Number(limit) || 10;
    const skips = (pages - 1) * limits;
    response = response.skip(skips).limit(limits);
    return response;
};

export const getInventoryByID = async (id) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(id)) throw new notFound('No inventories with given id exists...');
        const response = await inventoryModel.findById(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getInventory = async (filters) => {
    return await inventoryModel.findOne(filters);
};

export const updateInventory = async (id, body) => {
    try {
        const response = await inventoryModel.findByIdAndUpdate(
            id,
            {
                $set: body
            },
            { new: true }
        );
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteInventory = async (id) => {
    try {
        const response = await inventoryModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const releaseStocks = async (filters) => {
    const { id, body, staffID } = filters;
    try {
        const response = await releaseStocksModel.create({ ...body, stockId: id, requestedEmployee: staffID });
        return response.populate('requestedEmployee', ['_id', 'position', 'firstName']);
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const updateStockDetails = async (filters) => {
    const { status, id, stockId, quantity } = filters;
    const response = await releaseStocksModel
        .findByIdAndUpdate(
            id,
            {
                $set: { requestStatus: status }
            },
            { new: true }
        )
        .populate('requestedEmployee', ['_id', 'position', 'firstName']);

    if (status == 'APPROVED') {
        await inventoryModel.findByIdAndUpdate(
            stockId,
            {
                $inc: { quantity: -quantity }
            },
            { new: true }
        );
    }
    return response;
};

export const getOneStockRelease = async (id) => {
    return await releaseStocksModel.findById(id).lean();
};

export const getRequestedStocks = async () => {
    return await releaseStocksModel.find();
};
