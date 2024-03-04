import { log } from "console";
import { RequestHandler } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
import { FoodModel } from "../models/food.model";
import { OrderModel } from "../models/order.model";

export const order: RequestHandler = async (req, res) => {
  const {
    district,
    khoroo,
    apartment,
    detailedInfo,
    phoneNumber,
    paymentMethod,
    process,
    totalPrice,
    basket,
  } = req.body;

  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error("No authorization");
  }

  console.log(authorization);

  const { userId } = Jwt.verify(authorization, "secret-key") as JwtPayload;

  const foodArr = await OrderModel.find({ process: process });

  const orderNumber = foodArr.length + 1;

  await OrderModel.create({
    district: district,
    khoroo: khoroo,
    apartment: apartment,
    detailedInfo: detailedInfo,
    phoneNumber: phoneNumber,
    paymentMethod: paymentMethod,
    process: process,
    totalPrice: totalPrice,
    foods: basket,
    userId: userId,
    orderNumber: orderNumber,
  });

  res.json({
    message: district,
    khoroo: khoroo,
  });
};

export const sendOrder: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error("No authorization");
  }

  const { userId } = Jwt.verify(authorization, "secret-key") as JwtPayload;
  console.log(userId);

  const order = await OrderModel.find({ userId: userId });

  res.json({
    order,
  });
};
