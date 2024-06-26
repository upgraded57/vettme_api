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
const allowedOrigins = [
  process.env.DEV_CLIENT,
  process.env.SERVER_CLIENT, // Add other allowed origins as needed
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.indexOf(origin) === -1) {
        // If the origin is not in the allowedOrigins list, return an error
        const msg = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
        return callback(new Error(msg), false);
      }

      return callback(null, true);
    },
    credentials: true,
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
