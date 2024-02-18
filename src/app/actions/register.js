"use server";

import { db } from "@/server/db";
import createToken from "@/lib/jwt-token";
import { hashPassword } from "@/lib/bcrypt";
import { sendEmail } from "@/lib/emailer";

export const createUser = async (data) => {
  const { name, email, password } = data;
  const verifToken = createToken({ name, email });
  const existingUser = await db.user.findUnique({ where: { email } });
  if (existingUser) return { error: "User already exists" };
  const newUser = await db.user.create({
    data: {
      name: name,
      email: email,
      password: await hashPassword(password),
      verificationToken: verifToken,
    },
  });
  await sendEmail(email, verifToken);
  return newUser;
};
