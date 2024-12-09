const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const adminRouter = require("./admin/routes/index.js");
const apiRouter = require("./api/routes/index.js");
const { ErrorHandler } = require("./middlewares/errors.js");

// Initialize Application
const app = express();
const allowedOrigins = [
  process.env.DEV_CLIENT,
  process.env.SERVER_CLIENT, // Add other allowed origins as needed
  "https://vettme.ng",
  "https://m.vettme.ng",
];


app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Allow application to parse request body
app.use(express.json());

// Base route
app.get("/", (req, res) => {
  res.status(200).send("App is running correctly");
});

// Hook root router
app.use("/api/basic", rootRouter);

// Hook admin root router
app.use("/api/basic/admin", adminRouter);

// Hook api root router
app.use("/api/v1", apiRouter);

// Global error handler
app.use(ErrorHandler);

app.listen(process.env.PORT_NUM, () => {
  console.log("API online on port ", process.env.PORT_NUM);
});
