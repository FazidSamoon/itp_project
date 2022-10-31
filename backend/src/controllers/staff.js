import staffModel from "../models/staff.js"
import { makeResponse } from "../utils/response.js"

export const createStaffmember = async( req, res ) => {
    const response = await staffModel.create(req.body)
    if(!response) return makeResponse({res, status: 400, message: "SOmething went wrong"})
    makeResponse({res, status: 200, data: response, message: "task completed"})
}

export const findOne = async (filters) => {
    const response = await staffModel.findOne(filters)
    return response
}