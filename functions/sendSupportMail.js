const nodemailer = require("nodemailer");
require("dotenv").config({
  path: "./.env",
});

const sendSupportMail = (userEmail, statement, description, attachments) => {
  const transporter = nodemailer.createTransport({
    host: "mail.vettme.ng",
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Vettme" <dev@vettme.ng>',
    to: "support@vettme.ng",
    subject: "Vettme basic app user problem report",
    text: `
        User Email - ${userEmail},
        Problem Statement - ${statement},
        Problem Description - ${description} 
    `,
    attachments,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      if (error.syscall === "getaddrinfo") return;
      console.log("Report email error", error);
      return false;
    } else {
      console.log("Email sent: " + info);
      return true;
    }
  });
};

module.exports = sendSupportMail;
