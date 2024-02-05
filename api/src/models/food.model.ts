import { Schema, model } from "mongoose";

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingeredient: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  category: {
    type: String,
  },
});

export const FoodModel = model("foods", FoodSchema);
