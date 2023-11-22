import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        GITHUB_ID: z.string().min(1),
        GITHUB_SECRET: z.string().min(1),
        EMAIL_SERVER_USER: z.string().min(1),
        EMAIL_SERVER_PASSWORD: z.string().min(1),
        EMAIL_SERVER_HOST: z.string().min(1),
        EMAIL_SERVER_PORT: z.string().min(1),
        EMAIL_FROM: z.string().min(1),
    },
    client: {},
    runtimeEnv: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER,
        EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD,
        EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST,
        EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT,
        EMAIL_FROM: process.env.EMAIL_FROM,
    },
});
