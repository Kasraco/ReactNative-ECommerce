const express = require("express");
const cors = require("cors");
const connectedDB = require("./config/connection");
const requireSignIn = require("./helper/AuthMiddleWare");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

connectedDB();
app.use(express.json());
app.use(cors());
app.use("/api/v1/user", require("./routes/user"));
app.use("/api/v1/product", require("./routes/product"));
app.use("/api/v1/blog", require("./routes/blog"));
app.use("/api/v1/category", require("./routes/category"));

app.listen(port, console.log(`app is listening on ${port}`));
