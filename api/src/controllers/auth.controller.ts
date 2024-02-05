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
  const { email, password } = req.body.values;

  const user = await UserModel.findOne({ email: email });

  console.log(user);

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
  const token = Jwt.sign({ email }, "secret-key");

  res.json({ token });
};