const nodemailer = require("nodemailer");
require("dotenv").config({
  path: "./.env",
});

const sendotp = (recipient, subject, text) => {
  const transporter = nodemailer.createTransport({
    host: "mail.ijmgloballimited.com",
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
      if (error.syscall === "getaddrinfo") return;
      console.log(error);
    } else {
      return "Email sent: " + info.response;
    }
  });
};

module.exports = sendotp;
