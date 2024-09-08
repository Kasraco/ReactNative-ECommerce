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
        res.status(500).json({ message: "firstname is require" });
      case !lastName:
        res.status(500).json({ message: "lastName is require" });
      case !userName:
        res.status(500).json({ message: "userName is require" });
      case !password:
        res.status(500).json({ message: "password is require" });
      case password.length < 6:
        res.status(500).json({ message: "password is tiny" });
      case !email:
        res.status(500).json({ message: "email is require" });
      case !phoneNumber:
        res.status(500).json({ message: "phoneNumber is require" });
      case !address:
        res.status(500).json({ message: "address is require" });
    }

    if (await existUserName(userName))
      res.status(500).json({ success: false, message: "username is exist" });

    const hashedPassword = await hashPassword.hashPassword(password);

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
  try {
    const { userName, password } = req.body;

    //validation

    if (!userName || !password)
      return await res
        .status(204)
        .json({ success: false, message: "data is empty, please input them" });

    const user = await existUserName(userName);
    if (!user) {
      return await res.status(500).json({
        success: false,
        message: `the user ${userName} isnot exist`,
      });
    }

    const matchp = await hashPassword.compairPassword(password, user.password);

    if (!matchp) {
      return await res.status(500).json({
        success: false,
        message: `password is not true`,
      });
    }
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECURITY, {
      expiresIn: "1d",
    });

    return res.status(200).json({
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
  } catch (error) {
    console.log(error);
  }
};

const existUserName = async (userName) => {
  try {
    const existUser = await User.findOne({ userName });
    if (existUser == null) return false;
    return existUser;
  } catch (error) {
    return false;
  }
};

const mobileProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  try {
    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
      user,
    });
  } catch (error) {
    res.status(400).json("Invalid User");
  }
};

const Manager = async (req, res) => {
  const user = User.findById(req.user._id);

  try {
    if (user.isAdmin) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        isAdmin: user.isAdmin,
        user,
      });
    } else {
      res.status(400).json({ message: "Invalid User" });
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid User" });
  }
};

const forgetPassword = async (req, res) => {
  const { userName, oldpassword, password, confirmPassword } = req.body;

  try {
    //validation
    switch (true) {
      case !userName:
        return res.json({ message: "username is require" });
      case !oldpassword:
        return res.json({ message: "oldpassword is require" });
      case !password:
        return res.json({ message: "password is require" });
      case !confirmPassword:
        return res.json({ message: "confirmPassword is require" });
      case password != confirmPassword:
        return res.json({ message: "password and confirmPassword not equal" });
      case password == oldpassword:
        return res.json({ message: "password and oldpassword is equal" });
    }
    const user = await User.findOne({ userName });

    if (!user)
      return res
        .status(404)
        .json({ succces: false, message: "user not found" });
    else {
      const CP = await hashPassword.compairPassword(oldpassword, user.password);
      if (CP) {
        const hashed = await hashPassword.hashPassword(password);
        await User.findByIdAndUpdate(user._id, { password: hashed });

        res
          .status(201)
          .json({ success: true, message: "change password success" });
      } else {
        res.status(500).json({
          success: false,
          message: "the OldPassword is not equal with current password",
        });
      }
    }
  } catch (error) {}
};

const updateProfile = async (req, res) => {
  const { firstName, lastName, userName, email, phoneNumber, address } =
    req.body;
  console.log(req.headers.authorization);
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = JWT.verify(token, process.env.JWT_SECURITY);

      const result = await User.findById(decoded._id);
      if (!result) res.json({ message: "username notfound" });

      result.firstName = firstName;
      result.lastName = lastName;
      result.userName = userName;
      result.email = email;
      result.phoneNumber = phoneNumber;
      result.address = address;

      await result.save();
      res.status(201).json({ success: true, message: "update your profile" });
    }
    res.status(500).json({ success: false, message: "Your not login" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  register,
  login,
  mobileProfile,
  Manager,
  forgetPassword,
  updateProfile,
};
