//body of the email sent
export const mailData = (toEmail, verificationToken) => ({
  from: process.env.FROM_EMAIL,
  to: toEmail,
  subject: "AlgoArena: Please Verify Your Email",
  html: `<b>Thank you for creating an account. Please follow the link to verify your email.</b>
          <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verifyemail/?verificationtoken=${verificationToken}">Verify Email</a>`,
});
