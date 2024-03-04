import { RequestHandler } from "express";
import { UserModel } from "../models";
import Jwt, { JwtPayload } from "jsonwebtoken";

export const getUser: RequestHandler = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new Error("");
  }

  const { userId } = Jwt.verify(authorization, "secret-key") as JwtPayload;

  const user = await UserModel.findOne({ _id: userId });

  if (!user)
    return res.json({
      message: "User not found",
    });

  res.json(user);
};
