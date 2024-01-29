import { RequestHandler } from "express";
import { UserModel } from "../models";
import Jwt from "jsonwebtoken";

export const signUp: RequestHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await UserModel.create({
    name,
    email,
    password,
  });

  res.json({
    message: "User created successfully",
  });
};

export const logIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = UserModel.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }
  // const userPassword = UserModel.findOne({ password });
  // console.log(userPassword);

  // if (password !== user.password) {
  //   return res.status(401).json({
  //     message: "Wrong Password",
  //   });
  // }
  const token = Jwt.sign(email, "secret-key");

  return res.json({
    message: token,
  });
};
