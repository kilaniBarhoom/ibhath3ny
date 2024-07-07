import Google from "@auth/core/providers/google";
import type { NextAuthConfig } from "next-auth";

// import { LoginFormSchema } from "./schemas";

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";

export default {
  providers: [
    Google({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
