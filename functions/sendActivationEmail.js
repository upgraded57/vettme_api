const nodemailer = require("nodemailer");
require("dotenv").config({
  path: "./.env",
});

const sendActivationMail = (recipient, url) => {
  const transporter = nodemailer.createTransport({
    host: "wghp3.wghservers.com",
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
    to: recipient,
    subject: "Complete your Vettme Account creation",
    html: `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />

    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body
    style="
      margin: 0;
      width: 100%;
      font-family: 'Inter', sans-serif;
      background: #ffffff;
      font-size: 14px;
    "
  >
    <div
      style="
        margin: 0 auto;
        padding: 20px;
        background: #f4f7ff;
        background-repeat: no-repeat;
        background-size: 800px 452px;
        background-position: top center;
        font-size: 14px;
        color: #434343;
      "
    >
      <main>
        <div
          style="
            margin: 0;
            margin-top: 20px;
            padding: 60px 30px;
            background: #ffffff;
            border-radius: 10px;
            text-align: center;
          "
        >
          <div style="width: 100%; max-width: 489px; margin: 0 auto">
            <h1
              style="
                margin: 0;
                font-size: 24px;
                font-weight: 500;
                color: #1f1f1f;
              "
            >
              Complete your Vettme account Creation
            </h1>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-size: 16px;
                font-weight: 500;
              "
            >
              Hi,
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Thank you for choosing Vettme as your personnel verification
              partner. Use the following URL to complete your registration. URL
              is valid for
              <span style="font-weight: 600; color: #1f1f1f">30 minutes</span>.
              Do not share this URL with others
            </p>
            <a
              href=${url}
              style="
                display: block;
                margin-top: 20px;
                margin-bottom: 20px;
                font-size: 20px;
                padding: 10px 20px;
                color: white;
                background-color: #ff1111;
                border-radius: 6px;
                text-decoration: none;
              "
            >
              Activate Account
            </a>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              If the above button doesn't work, copy and paste the url below in
              your browser.
            </p>
            <p style="color: #ff1111; text-decoration: underline">
              ${url}
            </p>
            <p
              style="
                margin: 0;
                margin-top: 17px;
                font-weight: 500;
                letter-spacing: 0.56px;
              "
            >
              Didn't initiate this process? You don't have to take any action.
            </p>
          </div>
        </div>

        <p
          style="
            max-width: 400px;
            margin: 0 auto;
            margin-top: 90px;
            text-align: center;
            font-weight: 500;
            color: #8c8c8c;
          "
        >
          Need help? Ask at
          <a
            href="tech-support@ijmgloballimited.com"
            style="color: #7286e9; text-decoration: none"
            >Tech Support Center</a
          >
        </p>
      </main>

      <footer
        style="
          width: 100%;
          max-width: 490px;
          margin: 20px auto 0;
          text-align: center;
          border-top: 1px solid #e6ebf1;
        "
      >
        <p
          style="
            margin: 0;
            margin-top: 40px;
            font-size: 16px;
            font-weight: 600;
            color: #434343;
          "
        >
          Vettme
        </p>
        <p style="margin: 0; margin-top: 8px; color: #434343">
          426A, Oluwadamilola Fashade Street, Omole Phase 1, Ikeja, Lagos
        </p>

        <p style="margin: 0; margin-top: 16px; color: #434343">
          Copyright © 2024 Vettme. All rights reserved.
        </p>
      </footer>
    </div>
  </body>
</html>`,
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

module.exports = sendActivationMail;
