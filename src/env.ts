import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string()
});

const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

export const NEXT_PUBLIC_API_URL = env.NEXT_PUBLIC_API_URL;

export type Env = z.infer<typeof envSchema>;

export default env;
