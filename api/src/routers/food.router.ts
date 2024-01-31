import { Router } from "express";
import { addFood, getFoodData } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.get("/", getFoodData).get("/create", addFood);

export default foodRouter;
