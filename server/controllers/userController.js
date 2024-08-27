const User = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = await User.find();
  console.log("........ Before re.json");
  res.json(users);
};

module.exports = { getUsers };
