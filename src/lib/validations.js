export const serverValidation = async (credentials) => {
  if (credentials?.name) {
    if (!credentials?.name) return "Name is required";
    if (credentials?.name.length < 3)
      return "Name must be at least 3 characters long";
  }
  if (credentials?.email) {
    if (!credentials?.email) return "Email is required";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(credentials?.email))
      return "Invalid email address";
  }
  if (credentials?.password) {
    if (!credentials?.password) return "Password is required";
    if (credentials?.password.length < 6)
      return "Password must be at least 6 characters long";
  }
  return null;
};

export const userExists = async (db, email) => {
  let existingUser;
  try {
    existingUser = await db.user.findUnique({
      where: {
        email: email,
      },
    });
  } catch (error) {
    return "Something went wrong. Please try again.";
  }
  return existingUser;
};
