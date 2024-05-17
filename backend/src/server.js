const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

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
