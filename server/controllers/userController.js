const hashPassword = require("../helper/AuthHelper");
const User = require("../models/userModel");
const JWT = require("jsonwebtoken");

const getUsers = async (req, res) => {
  const users = await User.find().sort({ createAt: -1 });
  res.json(users);
};

const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      userName,
      password,
      email,
      phoneNumber,
      address,
    } = req.body;

    switch (true) {
      case !firstName:
        res.status(500).json({ error: "firstname is require" });
      case !lastName:
        res.status(500).json({ error: "lastName is require" });
      case !userName:
        res.status(500).json({ error: "userName is require" });
      case !password:
        res.status(500).json({ error: "password is require" });
      case password.length < 6:
        res.status(500).json({ error: "password is tiny" });
      case !email:
        res.status(500).json({ error: "email is require" });
      case !phoneNumber:
        res.status(500).json({ error: "phoneNumber is require" });
      case !address:
        res.status(500).json({ error: "address is require" });
    }

    if (await existUserName(userName))
      res.status(500).json({ success: false, message: "username is exist" });

    const hashedPassword = await hashPassword(password);

    const user = await new User({
      firstName,
      lastName,
      userName,
      password: hashedPassword,
      email,
      address,
      phoneNumber,
    }).save();
    return res.json({
      status: 200,
      success: true,
      message: `Welcome ${user.firstName}`,
      user,
    });
  } catch (error) {
    console.log(error);
  } finally {
  }
};

const login = async (req, res) => {
  const { userName, password } = req.body;

  //validation

  if (!userName || !password)
    return res
      .status(204)
      .json({ success: false, message: "data is empty, please input them" });

  const user = await User.findOne({ userName });
  if (!user)
    return res.status(304).json({
      success: false,
      message: `the user ${user.userName} isnot exist`,
    });

  const matchp = await hashPassword.compairPassword(password, user.password);
  if (!match)
    return res.status(401).json({
      success: false,
      message: `password is not true`,
    });

  const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECURITY, {
    expiresIn: "1d",
  });

  return res.status().json({
    success: true,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      isAdmin: user.isAdmin,
    },
    message: `Welcome ${user.userName}`,
    token,
  });
};

const existUserName = async (userName) => {
  const existUser = await User.findOne({ userName });
  return existUser;
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

module.exports = { getUsers, createFirstUser, register };
