"use server";

import { resetPasswordEmail } from "@/email/reset-password-email";
import { sendEmail } from "@/lib/emailer";
import createToken, { createPasswordResetToken } from "@/lib/jwt-token";
import { resetSchema } from "@/schemas/auth/reset";
import { db } from "@/server/db";
import { ValidationError } from "yup";

export const resetPassword = async (values) => {
    try {
        const { email } = await resetSchema.validate(values)

        const existingUser = await db.user.findUnique({
            where: { email },
        })

        if (!existingUser) {
            return { error: "Email not found" }
        }

        const passwordResetToken = createToken({ email}, '5m')
        const expires = new Date(new Date().getTime() + 1000 * 60 * 5)
        await db.user.update({
            where: { email },
            data: {
                resetPasswordToken: passwordResetToken,
                resetPasswordExpiration: expires,
            },
        })
        // TODO: Send email with the password reset token
        await sendEmail(resetPasswordEmail(email, passwordResetToken))

        return { success: "Password reset email sent" }
    } catch (err) {
        if (err instanceof ValidationError) {
            return { error: "Invalid Email" }
        } else {
            return { error: "An error occurred" }
        }
    }
}