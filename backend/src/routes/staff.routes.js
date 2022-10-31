import Express from "express";
import { createStaffmember } from "../controllers/staff.js";
const StaffRoute = Express.Router();

StaffRoute.post("/", createStaffmember)

export default StaffRoute;