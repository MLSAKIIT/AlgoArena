//body of the email sent
export const mailData = (toEmail, verificationToken) => ({
  from: process.env.FROM_EMAIL,
  to: toEmail,
  subject: "AlgoArena: Please Verify Your Email",
  html: `<b>Thank you for creating an account. Please follow the link to verify your email.</b>
          <a href="http://localhost:3000/verifyemail/?verificationtoken=${verificationToken}">Verify Email</a>`,
});
