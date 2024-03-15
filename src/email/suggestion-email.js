export const mailData = (suggestions) => ({
  from: process.env.FROM_EMAIL,
  to: process.env.FROM_EMAIL,
  subject: "userSuggestion",
  html: `<p>${suggestions}</p>`,
});
