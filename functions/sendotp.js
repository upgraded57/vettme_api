const nodemailer = require("nodemailer");
require("dotenv").config({
  path: "./.env",
});

const sendotp = (recipient, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "Vettme",
    to: recipient,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      throw error;
    } else {
      return "Email sent: " + info.response;
    }
  });
};

module.exports = sendotp;
