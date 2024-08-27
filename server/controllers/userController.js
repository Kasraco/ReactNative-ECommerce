const user = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = await user.find({ createAt: "desc" });
  console.log("........ Before re.json");
  res.json(users);
};

module.exports = { getUsers };
