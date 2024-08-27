const mongoose = require("mongoose");

const user = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, require: true },
  password: String,
  email: { type: String, require: true },
  phoneNumber: Number,
  isAdmin: { type: Boolean, default: false },
  address: String,
  createAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", user);
module.exports = User;
