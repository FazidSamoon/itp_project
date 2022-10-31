import Express from "express";
import {
  createEventItem,
  getAllEventItems,
  getEventItemById,
  updateEventItem,
  deleteEventItem,
} from "../controllers/event";

const eventRoute = Express.Router();

eventRoute.get("/", getAllEventItems);
eventRoute.get("/:id", getEventItemById);
eventRoute.post("/", createEventItem);
eventRoute.patch("/:id", updateEventItem);
eventRoute.delete("/:id", deleteEventItem);

export default eventRoute