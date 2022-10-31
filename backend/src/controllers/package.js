import e from "express";
import { badrequest } from "../errors/badRequest.js";

import {
  createPackageServices,
  getAllPackagesServices,
  getPackageByIDServices,
  updatePackageServices,
  deletePackageServices,
} from "../services/package.js";

import { makeResponse } from "../utils/response.js";

//create and save a new package
export const createPackageDetails = async (req, res) => {
  try {
    const response = await createPackageServices(req.body, res);
    //validate request
    if (!req.body) {
      res
        .status(400)
        .send({ message: "Package can not be created with empty content!" });
      return;
    }
    makeResponse({
      res,
      status: 200,
      data: response,
      message: "Package created successfully...",
    });
  } catch (error) {
    throw new badrequest(error);
  }
};

//retrieve all packages
export const getAllPackages = async (req, res) => {
  try {
    const response = await getAllPackagesServices(req.query);
    makeResponse({
      res,
      status: 200,
      data: response,
      message: "successfully retrieved package details...",
    });
  } catch (error) {
    throw new badrequest(error.message);
  }
};

//retrieve a package using it's ID
export const getPackageByID = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await getPackageByIDServices(id);
    //check wheather the response is available or not
    if (!response) {
      return makeResponse({
        res,
        status: 404,
        data: response,
        message: `Cannot find a package with ${id}!`,
      });
    }
    makeResponse({
      res,
      status: 200,
      data: response,
      message: "Successfully retreived package by ID..",
    });
  } catch (error) {
    throw new badrequest(error.message);
  }
};

//update a single package by using package ID
export const updatePackages = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const response = await updatePackageServices(id, body);
    if (!response) {
      return makeResponse({
        res,
        status: 404,
        data: response,
        message: `Cannot update the package with ${id} or package not found!`,
      });
    }
    makeResponse({
      res,
      status: 200,
      data: response,
      message: "Successfully updated package details..",
    });
  } catch (error) {
    throw new badrequest(error.message);
  }
};

//delete a single package by using package ID
export const deletePackages = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deletePackageServices(id);
    makeResponse({
      res,
      status: 200,
      data: response,
      message: "Package deleted successfully...",
    });
  } catch (error) {
    throw new badrequest(error.message);
  }
};

export const packageStats = async (req, res) => {
  res.status(200).send("package stats route");
};

//generate a report including all the packages sorted in ascending order by price
export const printPackagePricesASC = async (
  client,
  packageID,
  packageCategory
) => {
  //select all available packages and sorted them by price
  const pipeline = [
    {
      //this act as where clause in sql
      $match: {
        isAvailable: true,
      },
    },
    {
      //this act as groupby clause in sql
      $group: {
        category: "$category",
        packageID: "$packageID",
        packageCategory: "$packageCategory",
        price: "$price",
      },
    },
    {
      //this act as order by clause in sql
      $sort: { price: 1 },
    },
  ];
  const aggCursor = client
    .db("packageSchema")
    .collection("PriceList")
    .aggregate(pipeline);
  await aggCursor.forEach((packageListing) => {
    console.log(`$(packageListing.packageID):$(packageListing.price)`);
  });
};
