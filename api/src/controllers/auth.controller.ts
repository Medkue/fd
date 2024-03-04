import { RequestHandler } from "express";
import { UserModel } from "../models";
import Jwt from "jsonwebtoken";

export const signUp: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, location } = req.body.values;

    const uniqueEmail = await UserModel.findOne({ email });

    if (uniqueEmail) {
      return res.json({
        message: "User already exists. Try another email",
        status: "unsuccessful",
      });
    }

    await UserModel.create({
      name,
      email,
      password,
      location,
      role: "user",
    });

    res.json({
      message: "User created successfully",
      status: "successful",
    });
  } catch (error) {
    res.json({ message: error });
  }
};

export const logIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    return res.status(401).json({
      message: "User not found",
    });
  }

  if (password !== user.password) {
    return res.status(401).json({
      message: "Wrong Password",
    });
  }

  const userId = user._id;

  console.log(userId, user._id);

  const token = Jwt.sign({ userId }, "secret-key");

  res.json({ token });
};
