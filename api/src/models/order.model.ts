import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foods: {
    type: Array,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  process: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});

export const OrderModel = model("order", OrderSchema);
