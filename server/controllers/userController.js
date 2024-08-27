const User = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

module.exports = { getUsers };
