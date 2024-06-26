const express = require("express");
const cookieParser = require("cookie-parser");
require("dotenv").config({
  path: "./.env",
});
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const { ErrorHandler } = require("./middlewares/errors.js");

// Initialize Application
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    Headers: {
      "Access-Control-Allow-Origin": "http://localhost:5173",
      "Access-Control-Allow-Credentials": true,
    },
  })
);
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
