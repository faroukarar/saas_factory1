import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";

export function createAuth(
  db: any,
  googleSettings?: { clientId: string; clientSecret: string },
  options?: any,
) {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: "pg",
    }),

    socialProviders: {
      google: {
        clientId: googleSettings?.clientId as string,
        clientSecret: googleSettings?.clientSecret as string,
      },
    },
    ...options,
    plugins: [nextCookies()],
  });
}
