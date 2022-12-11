import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { validatePassword } from "@/lib/passwodValidation";
import prisma from "@/lib/prisma";

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing required parameters!");
        }

        let user;
        try {
          user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });
        } catch (error) {
          throw new Error("Error connecting database!");
        }

        if (user) {
          const isValidPassword = await validatePassword(
            user.password,
            credentials.password,
          );

          if (!isValidPassword) {
            throw new Error("Invalid password!");
          }
          const sessionUser = {
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            role: user.role,
          };

          return sessionUser;
        } else {
          throw new Error("User not found!");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }: any) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }: any) => {
      session.user = token.user;
      return session;
    },
  },
  pages: {
    signIn: "/admin",
  },
};

export default NextAuth(authOptions);
