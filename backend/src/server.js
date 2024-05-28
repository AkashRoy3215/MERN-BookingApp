const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
const cloudinary = require("cloudinary")

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Load env variables.
dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App is listening on port: ${port} ✔`);
});

const DBLink = process.env.DB.replace("<password>", process.env.DB_PASS);

mongoose.connect(DBLink).then(() => {
  console.log("Connected to DB ✔");
});
