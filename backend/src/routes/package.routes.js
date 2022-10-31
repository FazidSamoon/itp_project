import Express from "express";
import {
  createPackageDetails,
  deletePackages,
  getAllPackages,
  getPackageByID,
  packageStats,
  updatePackages,
  //printPackagePricesASC,
} from "../controllers/package.js";

const packageRoute = Express.Router();

//API
packageRoute.get("/", getAllPackages);
packageRoute.get("/stats", packageStats);
packageRoute.get("/:id", getPackageByID);
packageRoute.post("/", createPackageDetails);
packageRoute.patch("/:id", updatePackages);
packageRoute.delete("/:id", deletePackages);
//packageRoute.get("/printreport", printPackagePricesASC);

export default packageRoute;
