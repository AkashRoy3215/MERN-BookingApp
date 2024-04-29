const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`App is listening on port: ${port} ✔`);
});

const DBLink = process.env.DB.replace("<password>", process.env.DB_Pass);
mongoose.connect(DBLink).then(() => {
  console.log("Connected to DB ✔");
});
