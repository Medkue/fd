import { RequestHandler } from "express";
import { FoodModel } from "../models/food.model";

export const getFoodData: RequestHandler = async (req, res) => {
  const { category, discount } = req.body;
  let data: any = [];
  try {
    if (category) {
      data = await FoodModel.find({ category });
      res.json(data);
    } else {
      res.json({
        message: "Category data not found",
      });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

export const addFood: RequestHandler = async (req, res) => {
  try {
    await FoodModel.create({
      name: "hool",
      image:
        "https://www.pixelstalk.net/wp-content/uploads/2016/08/Pictures-HD-Food-Download.jpg",
      price: "55555",
      category: "snack",
    });
    res.json({
      message: "kk",
    });
  } catch (error) {
    console.log(error);
  }
};
