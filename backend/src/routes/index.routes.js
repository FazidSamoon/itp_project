import express from "express";

import menuRoute from "./menu.routes.js";
import restaurantRoute from "./restaurant.routes.js";
import authRouter from "./auth.routes.js";
import inventoryRoute from "./inventory.routes.js";
import customerRoute from "./customer.routes.js"
import resRouter from "./reservation.routes.js";
import StaffRoute from "./staff.routes.js";
import billingRoute from "./billing.routes.js";
import eventRoute from "./event.routes.js";
import packageRoute from "./package.routes.js";


const router = express.Router();

router.use("/auth", authRouter);
router.use("/restaurant", restaurantRoute);
router.use("/menu", menuRoute);
router.use("/inventory", inventoryRoute);
router.use("/customer", customerRoute);
router.use("/res", resRouter);
router.use("/staff", StaffRoute)
router.use("/billing", billingRoute);
router.use("/event", eventRoute);
router.use("/package",packageRoute);

export default router;

