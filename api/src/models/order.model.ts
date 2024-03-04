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
    type: String,
    required: false,
  },
  process: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
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
