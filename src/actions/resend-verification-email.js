"use server";

import { mailData } from "@/email/verification-email";
import { sendEmail } from "@/lib/emailer";
import createToken from "@/lib/jwt-token";
import { db } from "@/server/db";

export const resendVerificationEmail = async (email) => {
  try {
    const verificationToken = createToken({ email });
    const existingUser = await db.user.findUnique({ where: { email } });
    if (!existingUser) {
        return { error: "User not found" };
    }

    await db.user.update({
        where: { email },
        data: {
            verificationToken
        }
    })
    await sendEmail(mailData(email, verificationToken));
    return { success: "Email sent successfully" }
  } catch (error) {
    return {
        error: "Error sending verification email",
    }
  }
};
