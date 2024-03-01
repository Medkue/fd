import { RequestHandler } from "express";

export const order: RequestHandler = async (req, res) => {
  console.log(req.body);

  const { district, khoroo } = req.body;
  console.log(district, khoroo);

  res.json({
    message: district,
    khoroo: khoroo,
  });
};
