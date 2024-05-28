const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const myHotels = require("./routers/myHotels");

dotenv.config({ path: "./config.env" });

const app = express();
app.use(cookieParser());
app.use(express.json()); //To acess Body.
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
); //For connecting backend from frontend.
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("api/my-hotels", myHotels);

module.exports = app;
