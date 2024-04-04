import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { env } from "./env";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./prisma";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GoogleProvider({
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		}),
		EmailProvider({
			server: {
				host: env.EMAIL_SERVER_HOST,
				port: env.EMAIL_SERVER_PORT,
				auth: {
					user: env.EMAIL_SERVER_USER,
					pass: env.EMAIL_SERVER_PASSWORD,
				},
			},
			from: env.EMAIL_FROM,
		}),
	],
	callbacks: {
		session({ session, user }) {
			if (!session?.user) return session;
			session.user.id = user.id;
			return session;
		},
	},
};

export const getAuthSession = async () => {
	const session = await getServerSession(authOptions);
	return session;
};
