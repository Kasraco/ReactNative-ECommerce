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
      req.user = await User.findById(decoded._id).select("-password");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = requireSignIn;
