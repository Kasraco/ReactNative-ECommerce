const mongoos = require("mongoose");

const connectedDB = async () => {
  try {
    await mongoos.connect(`mongodb://0.0.0.0:27017/${process.env.DB_NAME}`);
    console.log("data base connected successfuly");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectedDB;
