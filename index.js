const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config({
  path: "./.env",
});
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const ErrorHandler = require("./middlewares/errors.js");

// Initialize Application
const app = express();
app.use(cors());
app.use(cookieParser());

// Allow application to parse request body
app.use(express.json());

// Hook root router
app.use("/api/basic", rootRouter);

// Global error handler
app.use(ErrorHandler);

app.listen(process.env.PORT_NUM, () => {
  console.log("API online on port ", process.env.PORT_NUM);
});
