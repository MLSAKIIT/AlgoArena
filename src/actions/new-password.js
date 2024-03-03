"use server"

import { hashPassword } from "@/lib/bcrypt"
import { verifyToken } from "@/lib/jwt-token"
import { newPasswordSchema } from "@/schemas/auth/new-password"
import { db } from "@/server/db"
import { TokenExpiredError } from "jsonwebtoken"
import { ValidationError } from "yup"

export const newPassword = async (values,token) => {
    try {
        if (!token) {
            return { error: "Invalid token" }
        }

        const { password } = await newPasswordSchema.validate(values)
        
        const isTokenValid = verifyToken(token)

        const { email } = isTokenValid.user

        const existingUser = await db.user.findUnique({
            where: { email }
        })

        if (!existingUser) {
            return { error: "User not found" }
        }

        const hashedpassword = await hashPassword(password)

        await db.user.update({
            where: { email },
            data: { 
                password: hashedpassword,
                resetPasswordToken: null,
                resetPasswordExpiration: null
            }
        })
        
        return { success: "Password reset successfully" }
    } catch (err) {
        if (err instanceof ValidationError) {
            return { error: "Invalid Password" }
        } 
        if (err instanceof TokenExpiredError) {
            return { error: "Reset link has expired" }
        }
        return { error: "Something went wrong" }
    }
}