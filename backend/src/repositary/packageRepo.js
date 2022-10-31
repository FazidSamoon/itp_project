import { badRequest } from "../errors/badRequest";

import packageModel from "../models/package.js";

export const createPackageRepo = async (packages, res) => {
  try {
    //wait until package creates
    const response = await packageModel.create(packages);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getAllPackagesRepo = async (queries) => {
  const { packageID, sort, page, limit } = queries;
  let queryObject = {};

  if (packageID) {
    queryObject.packageID = packageID;
  }
  console.log(queryObject);

  let response = packageModel.find(queryObject);

  if (sort) {
    let sortList = sort.split(",").join(" ");
    response = response.sort(sortList);
  } else {
    response = response.sort("createdAt");
  }

  //paginate response based on given page number and limit per the page
  //to display limit number of package details per page

  const pages = Number(page) || 1; //if page doesn't have a value then value of pages constant should be 1
  const limits = Number(limit) || 10;
  const skips = (pages - 1) * limits;

  response = response.skip(skips).limit(limits); //skip this amount of pages and display the next available page
  return response;
};

export const getPackageDetailsByIDRepo = async (id) => {
  try {
    //wait until find the package by ID
    const response = await packageModel.findById(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getPackages = async (filters) => {
  return await packageModel.findOne(filters);
};

export const updatePackageRepo = async (id, body) => {
  try {
    //wait until find the package by ID and update
    const response = await packageModel.findByIdAndUpdate(id, body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deletePackageRepo = async (id) => {
  try {
    //wait until find the package by ID and delete
    const response = await packageModel.findByIdAndDelete(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};
