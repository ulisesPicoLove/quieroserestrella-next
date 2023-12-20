import { connectMongo, disconnectMongo } from "../../../lib/dbconnection/mongodb";
import User from "../../../lib/models/Users";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Correo electronico" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req){
              try {
                await connectMongo();
                const userFound = await User.findOne({ email: credentials?.email }).select("+password");

                if (!userFound) throw new Error("Invalid credentials");
                const passwordMatch = await bcrypt.compare(credentials.password, userFound.password);

                if (!passwordMatch) throw new Error("Invalid credentials");
                return userFound

              } catch (error) {
                console.error(error);
              }
            }
        })
    ],
    pages: {
        signIn: "/login"
    },
    session: { strategy: "jwt" }
}

const handler = NextAuth(authOptions);

export default handler;

