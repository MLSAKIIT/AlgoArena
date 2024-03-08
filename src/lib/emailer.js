// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   secure: true,
// });

export const sendEmail = async (emailBody) => {
  const data = await fetch("https://emailer-iutl.onrender.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailBody),
  });
  const response = await data.json();
  return response;
  // await transporter.sendMail(emailBody);
};
