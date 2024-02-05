import { RequestHandler } from "express";
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");

export const sendEmail: RequestHandler = async (req, res) => {
  const { email } = req.body;
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
    console.log(email);

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
