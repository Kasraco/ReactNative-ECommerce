const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hp = bcrypt.hash(password, saltRounds);
    return hp;
  } catch (error) {
    console.log(error);
  }
};

module.exports = hashPassword;
