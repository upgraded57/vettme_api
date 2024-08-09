const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const { ErrorHandler } = require("./middlewares/errors.js");
const UnauthorizedRequestException = require("./exceptions/unauthorized.js");
const { authenticationErrors } = require("./exceptions/status-codes.js");

// Initialize Application
const app = express();
const allowedOrigins = [
  process.env.DEV_CLIENT,
  process.env.SERVER_CLIENT, // Add other allowed origins as needed
  "https://vettme-basic-git-main-upgraded57s-projects.vercel.app",
  "https://vettme-basic-irzfsg9jl-upgraded57s-projects.vercel.app",
  "https://ijmgloballimited.com",
  "https://ijm-client.vercel.app",
  "http://192.168.71.244:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        // If the origin is not in the allowedOrigins list, return an error
        const msg = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
        throw new UnauthorizedRequestException(
          msg,
          authenticationErrors.UNAUTHORIZED_CORS_ACCESS
        );
      }

      return callback(null, true);
    },
    credentials: true,
  })
);

// Allow application to parse request body
app.use(express.json());

// Hook root router
app.use("/api/basic", rootRouter);

// Global error handler
app.use(ErrorHandler);

app.listen(process.env.PORT_NUM, () => {
  console.log("API online on port ", process.env.PORT_NUM);
});
