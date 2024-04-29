const express = require("express");
const userRouter = express.Router();
const { check } = require("express-validator");
const userController = require("../controllers/userController");

userRouter.post(
  "/register",
  [
    check("firstName", "First Name is required").isString(),
    check("lastName", "last Name is required").isString(),
    check("email", "email is required").isEmail(),
    check("password", "password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  userController.postUser
);

module.exports = userRouter;
