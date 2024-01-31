import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  foodId: {
    type: String,
    required: true,
  },
});

export const CategoryModel = model("category", CategorySchema);
