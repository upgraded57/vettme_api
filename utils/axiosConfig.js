const axios = require("axios");
require("dotenv").config({
  path: "../.env",
});

const baseUrl = process.env.DOJAH_PROD_URL;
const AppId = process.env.DOJAH_APP_ID;
const APIKey = process.env.DOJAH_PROD_KEY;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 1000 * 60, // 1 minute
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  config.headers.AppId = AppId;
  config.headers.Authorization = APIKey;

  return config;
});

module.exports = axiosInstance;
