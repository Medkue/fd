import { RequestHandler } from "express";
import { FoodModel } from "../models/food.model";

export const getFoodData: RequestHandler = async (_req, res) => {
  try {
    const data = await FoodModel.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

export const addFood: RequestHandler = async (req, res) => {
  try {
    await FoodModel.create({
      name: "hool",
      image: "hjdsfjkds",
      price: "chi diilkue",
    });
    res.json({
      message: "kk",
    });
  } catch (error) {
    console.log(error);
  }
};
