const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // Your Gmail address
    pass: process.env.SMTP_PASS, // Your app password (NOT your Gmail password)
  },
});

const sendByMail = async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "ti387631@gmail.com",
      subject: "Hello ✔",
      text: "Hello world?",
      html: `
    <h1 style="color: red;">Hello world?</h1>
    <p>Please click the link below to activate your account:</p>
    <a href="${process.env.ACTIVATION_LINK}" style="color: blue; text-decoration: none;">Click here to activate your account</a>
  `,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendByMail;
