const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
dotenv.config({ path: "./config.env" });

exports.verifyToken = (req, res, next) => {
  const token = req.cookies["auth_token"];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
