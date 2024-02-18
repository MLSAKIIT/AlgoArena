import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "../db";
import { comparePassword, hashPassword } from "@/lib/bcrypt";
import { serverValidation, userExists } from "@/lib/validations";
import createToken from "@/lib/jwt-token";

export const authOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        name: { label: "Name", type: "text", placeholder: "John Doe" },
        email: { label: "Email", type: "text", placeholder: "test@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.name) {
          let validate = await serverValidation(credentials);
          if (validate) throw new Error(validate);
          let existingUser = await userExists(db, credentials?.email);
          if (existingUser)
            throw new Error("User already exists. Please sign in.");

          const token = createToken({
            id: credentials.id,
            name: credentials.name,
            email: credentials.email,
          });

          const newUser = await db.user.create({
            data: {
              name: credentials?.name,
              email: credentials?.email,
              password: await hashPassword(credentials.password),
              verificationToken: token,
            },
          });

          // TODO : send email with the verification token

          return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          };
        } else {
          let validate = serverValidation(credentials);
          if (validate) throw new Error(validate);

          let existingUser;
          try {
            existingUser = await db.user.findUnique({
              where: { email: credentials?.email },
            });
          } catch (error) {
            throw new Error("Something went wrong. Please try again.");
          }

          if (!existingUser) {
            throw new Error("User not found. Please sign up.");
          }

          // TODO: Hash the password and compare it to the hashed password in the database
          // const isPasswordValid = await comparePassword(credentials.password, existingUser.password);

          const isPasswordValid =
            existingUser.password === credentials.password;

          if (!isPasswordValid) {
            throw new Error("Wrong credentials. Please try again.");
          }

          return {
            id: existingUser.id,
            name: existingUser.name,
            email: existingUser.email,
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          name: user.name,
          id: user.id,
        };
      }
      return token;
    },
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.name,
          id: token.id,
        },
      };
    },
  },
  pages: {
    signIn: "/sign-in",
    signUp: "/sign-up",
  },
};
