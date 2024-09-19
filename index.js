const express = require("express");
require("dotenv").config({
  path: "./.env",
});
const cors = require("cors");
const rootRouter = require("./routes/index.js");
const adminRouter = require("./admin/routes/index.js");
const { ErrorHandler } = require("./middlewares/errors.js");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

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

// Allow connection from only specify urls
// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.indexOf(origin) === -1) {
//         // If the origin is not in the allowedOrigins list, return an error
//         const msg = `The CORS policy for this site does not allow access from the specified origin: ${origin}`;
//         throw new UnauthorizedRequestException(
//           msg,
//           authenticationErrors.UNAUTHORIZED_CORS_ACCESS
//         );
//       }

//       return callback(null, true);
//     },
//     credentials: true,
//   })
// );

// Allow connection from anywhere (Will be removed in production)

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Allow application to parse request body
app.use(express.json());

// Ensure the logs directory exists
const logDirectory = path.join(__dirname, "logs");
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

// Create a write stream in append mode
const logStream = fs.createWriteStream(path.join(__dirname, "log.txt"), {
  flags: "a",
});

// Create a write stream (in append mode) for the log file
const accessLogStream = fs.createWriteStream(
  path.join(logDirectory, "log.txt"),
  { flags: "a" }
);

// Define custom morgan tokens
morgan.token("req-headers", (req) => JSON.stringify(req.headers));
morgan.token("req-body", (req) => JSON.stringify(req.body));
morgan.token("res-body", (req, res) => JSON.stringify(res.body)); // Optional, complex to implement
morgan.token("date", () => {
  return new Date().toISOString();
});

// Define custom morgan format including timestamp
const customFormat = `Date - :date, \nMethod - :method \nURL - :url \nResponse Status - :status \nResponse Time - :response-time ms - :res[content-length]\nRequest Body: :req-body\nResponse Body - :res-body\n`;

// Use morgan middleware with the custom format
app.use(morgan(customFormat, { stream: accessLogStream }));

// Base route
app.get("/", (req, res) => {
  res.status(200).send("App is running correctly");
});

// Hook root router
app.use("/api/basic", rootRouter);

// Hook admin route router
app.use("/api/basic/admin", adminRouter);

// Global error handler
app.use(ErrorHandler);

app.listen(process.env.PORT_NUM, () => {
  console.log("API online on port ", process.env.PORT_NUM);
});
