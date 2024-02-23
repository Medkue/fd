import { RequestHandler } from "express";
import { FoodModel } from "../models/food.model";

export const getFoodData: RequestHandler = async (req, res) => {
  const { category, discount } = req.body;
  let data: any = [];
  // const splittedCategory = category.trim();
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

//foods.find({category:{$regex:/^ searchValue/, $options:"i"}}) hoyulangiinh ni search deer tom jijig useggui hainaa

export const addFood: RequestHandler = async (req, res) => {
  const { name, image, price, ingedrients, category, discount } = req.body;
  try {
    await FoodModel.create({
      name: name,
      image: image,
      // "https://www.pixelstalk.net/wp-content/uploads/2016/08/Pictures-HD-Food-Download.jpg",
      price: price,
      category: category,
      ingeredient: ingedrients,
      discount: discount,
    });
    res.json({
      message: "Food added into menu successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
