import { badRequest } from "../errors/badRequest.js";

import {
  createPackageRepo,
  getAllPackagesRepo,
  getPackageDetailsByIDRepo,
  getPackages,
  updatePackageRepo,
  deletePackageRepo,
} from "../repositary/packageRepo.js";

import { makeResponse } from "../utils/response.js";

export const createPackageServices = async (packages, res) => {
  try {
    const response = await createPackageRepo(packages, res);
    if (!response) {
      return makeResponse({
        res,
        status: 400,
        message: "Something went wrong while creating the package!",
      });
    }
    return response;
  } catch (error) {
    throw new badRequest(error);
  }
};

export const getAllPackagesServices = async (queries) => {
  try {
    const response = await getAllPackagesRepo(queries);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const getPackageByIDServices = async (id, res) => {
  try {
    const response = await getPackageDetailsByIDRepo(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const updatePackageServices = async (id, body) => {
  try {
    const response = await updatePackageRepo(id, body);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

export const deletePackageServices = async (id) => {
  try {
    const response = await deletePackageRepo(id);
    return response;
  } catch (error) {
    throw new badRequest(error.message);
  }
};

// export const printPackagePricesASC = async (client,res)=>{
//   try{
//     const response = await printPackageRepo()
//   }
// };
