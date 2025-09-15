import { loginUser } from "@/app/action/auth/loginUser";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "email", placeholder: "your@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "**********" }
            },
            async authorize(credentials, req) {
                const user = await loginUser(credentials);

                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };