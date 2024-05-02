const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json()); //To acess Body.
app.use(cors()); //For connecting backend from frontend.
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);



module.exports = app;
