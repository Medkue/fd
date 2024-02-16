import express from "express";
import cors from "cors";
import { json } from "body-parser";
import authRouter from "./routers/auth.router";
import foodRouter from "./routers/food.router";
import emailRouter from "./routers/email.router";
import userRouter from "./routers/user.router";

const app = express();

app.use(cors());
app.use(json());

app.use("/", authRouter);
app.use("/food", foodRouter);
app.use("/email", emailRouter);
app.use("/user", userRouter);

export default app;
