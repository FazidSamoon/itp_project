import Express from "express";
import { loginUser, registerUser } from "../controllers/auth";
const authRouter = Express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser);


export default authRouter;
