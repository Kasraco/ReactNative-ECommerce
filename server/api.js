const express = require("express");
const connectedDB = require("./config/connection");
const requireSignIn = require("./helper/AuthMiddleWare");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

connectedDB();
app.use(express.json());
app.use("/api/v1/user", require("./routes/user"));

app.listen(port, console.log(`app is listening on ${port}`));
