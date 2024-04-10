import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		EMAIL_SERVER_USER: z.string().min(1),
		EMAIL_SERVER_PASSWORD: z.string().min(1),
		EMAIL_SERVER_HOST: z.string().min(1),
		EMAIL_SERVER_PORT: z.string().min(1),
		EMAIL_FROM: z.string().min(1),
		GOOGLE_CLIENT_ID: z.string().min(1),
		GOOGLE_CLIENT_SECRET: z.string().min(1),
		FACEBOOK_CLIENT_ID: z.string().min(1),
		FACEBOOK_CLIENT_SECRET: z.string().min(1),
	},
	client: {},
	runtimeEnv: {
		EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
		EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
		EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
		EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
		EMAIL_FROM: process.env.EMAIL_FROM,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
		FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
		FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	},
});
