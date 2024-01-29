import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://medkuena:Medkuushdehu@medkuena.x0uejjt.mongodb.net/food_delivery_app"
    );
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Try to connect to database FAILED");
  }
};
