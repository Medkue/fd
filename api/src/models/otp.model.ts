import { Schema, model } from "mongoose";

const OtpSchema = new Schema({
  otp: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export const OtpModel = model("otp", OtpSchema);
