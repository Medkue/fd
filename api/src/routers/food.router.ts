import { Router } from "express";
import { addFood, getFoodData } from "../controllers/food.controller";
import { order } from "../controllers/order.controller";

const foodRouter = Router();

foodRouter.post("/", getFoodData).get("/create", addFood).post("/order", order);

export default foodRouter;
