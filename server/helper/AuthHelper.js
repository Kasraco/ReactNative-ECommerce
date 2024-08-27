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

const compairPassword = async (password, hdp) => {
  return await bcrypt.compare(password, hdp);
};

module.exports = { hashPassword, compairPassword };
