const user = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = user.find({ createAt: "desc" });
  res.json(users);
};

module.exports = { getUsers };
