import { Router } from "express";
import { addFood, getFoodData } from "../controllers/food.controller";

const foodRouter = Router();

foodRouter.post("/", getFoodData).get("/create", addFood);

export default foodRouter;
