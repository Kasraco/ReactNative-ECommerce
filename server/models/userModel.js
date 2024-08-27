const mongoos = require("mongoose");

const user = new mongoos.Schema({
  firstName: String,
  lastName: String,
  userName: { type: String, unique: true, require: true },
  password: String,
  email: { type: String, require: true },
  phoneNumber: Number,
  isAdmin: { type: Boolean, default: false },
  address: String,
  createAt: { type: Date, default: Date.now() },
});

const User = mongoos.model("User", user);
module.exports = User;
