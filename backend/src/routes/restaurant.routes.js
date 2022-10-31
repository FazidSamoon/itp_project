import Express from "express";
import {
  createRestaurantDetails,
  deleteRestaurantDetails,
  getAllRestaurantDetails,
  getRestaurantDetailsByID,
  updateRestaurantDetails,
} from "../controllers/restaurant";
const restaurantRoute = Express.Router();

restaurantRoute.get("/", getAllRestaurantDetails);
restaurantRoute.get("/:id", getRestaurantDetailsByID);
restaurantRoute.post("/", createRestaurantDetails);
restaurantRoute.patch("/:id", updateRestaurantDetails);
restaurantRoute.delete("/:id", deleteRestaurantDetails);

export default restaurantRoute;
