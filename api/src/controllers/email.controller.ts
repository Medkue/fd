import { RequestHandler } from "express";
import { OtpModel } from "../models/otp.model";
import { UserModel } from "../models";
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const user = await UserModel.findOne({ email: email });

  console.log(user, "user ");

  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "togtosatsolmn@gmail.com",
        pass: "loxktatbizbldmls",
      },
    });

    const otp = otpGenerator.generate(6, {
      upperCaseAlphabets: true,
      specialChars: true,
    });

    await OtpModel.create({
      email: email,
      otp: otp,
    });

    const mailOptions = {
      from: "togtosatsolmn@gmail.com",
      to: email,
      subject: "Food delivery app OTP",
      text: `Here is your account recovery code:${otp}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      message: "Email sent successfully",
    });
  } catch (error) {
    res.json(error);
  }
};

export const sendOtp: RequestHandler = async (req, res) => {
  const { email, otp } = req.body;

  const user = await OtpModel.findOne({ email: email });

  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  if (otp !== user.otp) {
    return res.json({
      message: "otp doesn't match",
    });
  }

  OtpModel.deleteOne({ email: email });

  return res.json({
    message: "Success",
  });
};

export const changePassword: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = UserModel.findOne({ email: email });
  console.log(email, password);

  // console.log(user, "user");

  if (!user)
    return res.json({
      message: "User not found",
    });

  user.updateOne({ password: password });

  return res.json({
    message: "Success",
  });
};
