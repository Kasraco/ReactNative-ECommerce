const express = require("express");
const connectedDB = require("./config/connection");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;
connectedDB();

app.use("/api/v1/user", require("./routes/user"));

app.listen(port, console.log(`app is listening on ${port}`));
