import { RequestHandler } from "express";
import { UserModel } from "../models";

export const getUser: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.find({ email });

  if (!user)
    return res.json({
      message: "User not found",
    });

  res.json(user);
};
