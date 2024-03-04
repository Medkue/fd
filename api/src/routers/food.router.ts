import { Router } from "express";
import { addFood, getFoodData } from "../controllers/food.controller";
import { order, sendOrder } from "../controllers/order.controller";

const foodRouter = Router();

foodRouter
  .post("/", getFoodData)
  .get("/create", addFood)
  .post("/order", order)
  .get("/getOrder", sendOrder);

export default foodRouter;
