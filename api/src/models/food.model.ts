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
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
});

export const FoodModel = model("foods", FoodSchema);
