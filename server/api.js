const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/v1/user", require("./routes/user"));

app.listen(port, console.log(`app is listening on ${port}`));
