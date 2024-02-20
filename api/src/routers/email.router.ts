import { Router } from "express";
import { addFood, getFoodData } from "../controllers/food.controller";
import {
  changePassword,
  sendEmail,
  sendOtp,
} from "../controllers/email.controller";

const emailRouter = Router();

emailRouter
  .post("/send", sendEmail)
  .post("/get", sendOtp)
  .post("/password", changePassword);

export default emailRouter;
