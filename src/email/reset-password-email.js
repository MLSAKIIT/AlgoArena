export const resetPasswordEmail = (toEmail, resetToken) => ({
  from: process.env.FROM_EMAIL,
  to: toEmail,
  subject: "AlgoArena: Reset Password",
  html: `Somebody (hopefully you) requested a password reset for your AlgoArena account. 
  If this was you, click the link below to reset your password. If you didn't request a password reset, 
  you can ignore this email. <a href="${process.env.NEXT_PUBLIC_SERVER_URL}/new-password?token=${resetToken}">Reset Password</a>`,
});
