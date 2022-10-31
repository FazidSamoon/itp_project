import Mongoose from 'mongoose';
import billingModel from '../models/billing.js';
import { badRequest } from '../errors/badRequest.js';
import { notFound } from '../errors/notFound.js';

export const createBilling = async (data) => {
    try {
        const response = await billingModel.create(data);
        return response;
    } catch (error) {}
};

export const getBillingById = async (id) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(id)) throw new notFound('No billing with given id exists...');
        const response = await billingModel.findById(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const getAllBilling = async (queries) => {
    const { customerName, sort, page, limit } = queries;
    let queryObject = {};
    if (customerName) {
        queryObject.customerName = customerName;
    }
    console.log(queryObject);
    let response = billingModel.find(queryObject);

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

export const updateBilling = async (id, body) => {
    try {
        const response = await billingModel.findByIdAndUpdate(id, { $set: body }, { new: true });
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
};

export const deleteBilling = async (id) => {
    try {
        const response = await billingModel.findByIdAndDelete(id);
        return response;
    } catch (error) {
        throw new badRequest(error.message);
    }
    
};


