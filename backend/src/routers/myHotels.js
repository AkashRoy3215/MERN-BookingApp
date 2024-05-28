const express = require("express");
const multer = require("multer");
const hotelController = require("../controllers/hotelController");
const { verifyToken } = require("../middleware/auth");
const { body } = require("express-validator");

const router = express.Router();
const storage = multer.memoryStorage();

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
});

//api/my-hotels
router.post(
  "/",
  verifyToken,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("city is required"),
    body("country").notEmpty().withMessage("country is required"),
    body("description").notEmpty().withMessage("description is required"),
    body("type").notEmpty().withMessage("type is required"),
    body("pricePerNight")
      .notEmpty()
      .isNumeric()
      .withMessage("price per night is required and must be a number"),
    body("facilities")
      .notEmpty()
      .isArray()
      .withMessage("Facilities are required"),
  ],
  upload.array("imageFiles", 6),
  hotelController.postHotel
);

module.exports = router;
