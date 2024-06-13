const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config({
  path: "./.env",
});

const rootRouter = require("./routes/index.js");

// Initialize Application
const app = express();
app.use(cookieParser());

// Allow application to parse request body
app.use(express.json());

// Hook root router
app.use("/api/basic", rootRouter);

app.listen(process.env.PORT_NUM, () => {
  console.log("API online on port ", process.env.PORT_NUM);
});
