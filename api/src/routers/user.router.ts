import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const userRouter = Router();

userRouter.post("/get", getUser);
export default userRouter;
