const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "691b19092a00c1",
    pass: "235358a2fd9d23",
  },
});

module.exports = transport;
