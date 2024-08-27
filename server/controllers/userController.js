const User = require("../models/userModel");

const getUsers = async (req, res) => {
  const users = await User.find().sort({ createAt: -1 });
  res.json(users);
};

const createFirstUser = async (req, res) => {
  const newuser = new User({
    firstName: "Ali",
    lastName: "Rezaei",
    userName: "alirezaei",
    password: "password123",
    email: "ali@example.com",
    phoneNumber: 123456789,
    address: "Tehran, Iran",
  });

  await newuser.save();
  res.status(201).json({ message: "User created successfully", user: newuser });
};

module.exports = { getUsers, createFirstUser };
