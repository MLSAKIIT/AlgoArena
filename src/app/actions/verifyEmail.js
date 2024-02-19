"use server";
import { verifyToken } from "@/lib/jwt-token";
import { db } from "@/server/db";

export const verifyEmail = async (verificationToken) => {
  try {
    if (!verificationToken) throw new Error("Token not found.");

    //verify the token and extract the email
    const decodedToken = verifyToken(verificationToken);
    const email = decodedToken.user.email;
    if (!email) {
      throw new Error("Invalid Token.");
    }

    //if entry exists then update it to be verified otherwise throw an error
    const updatedUser = await db.user.update({
      where: {
        email,
        verificationToken,
      },
      data: {
        verificationToken: null,
        emailVerified: true,
      },
    });

    return { message: "Successfully verified" };
  } catch (err) {
    return { error: err.message };
  }
};
