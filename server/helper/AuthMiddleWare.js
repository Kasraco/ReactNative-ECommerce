const User = require("../models/userModel");
const JWT = require("jsonwebtoken");

const requireSignIn = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = JWT.verify(token, process.env.JWT_SECURITY);
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = requireSignIn;
