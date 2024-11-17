import { differenceInMinutes, fromUnixTime } from "date-fns";
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// biome-ignore lint/correctness/noUnusedImports: <explanation>
import { JWT } from "next-auth/jwt";

let refreshingToken = false;

interface AuthResponse {
  accessToken: string;
  accessTokenExpiresIn: number;
  refreshToken: string;
  refreshTokenExpiresIn: number;
  user: {
    id: number;
    fullName: string;
    email: string;
  };
}

const login = async (email: string, password: string): Promise<AuthResponse | null> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  return response.json() as Promise<AuthResponse>;
};

const refreshToken = async (refreshToken: string): Promise<AuthResponse | null> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
    method: "POST",
    body: JSON.stringify({ refreshToken }),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Invalid refresh token");
  return response.json() as Promise<AuthResponse>;
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials) throw new Error("No credentials provided");
          const res = await login(credentials.email as string, credentials.password as string);
          if (!res) throw new Error("Invalid credentials");
          return res;
        } catch (e: unknown) {
          throw new CredentialsSignin(e instanceof Error ? e.message : "Invalid credentials");
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom sign-in page
  },
  callbacks: {
    async jwt({ token, user }) {
      /**
       * Returned from authorize.
       * This will only be executed at login success.
       */
      if (user) {
        token.accessToken = user.accessToken;
        token.accessTokenExpiresIn = user.accessTokenExpiresIn;
        token.refreshToken = user.refreshToken;
        token.refreshTokenExpiresIn = user.refreshTokenExpiresIn;
        token.user = user.user;
      }

      const diffInMin = differenceInMinutes(fromUnixTime(token.accessTokenExpiresIn), new Date());
      if (diffInMin && diffInMin < 5) {
        try {
          if (refreshingToken) return token;
          refreshingToken = true;
          const res = await refreshToken(token.refreshToken);
          if (res) return { ...token, ...res };
        } catch {
          return { ...token, error: "RefreshAccessTokenError" };
        } finally {
          refreshingToken = false;
        }
      }

      return token;
    },
    /**
     * Return the session values to the client
     */
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.authUser = token.user;
      session.error = token.error;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // Set this to a secure, random value
});

/* ---------------------------------- Types --------------------------------- */

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    error?: string;
    accessToken: string;
    authUser: AuthResponse["user"];
  }

  interface User extends AuthResponse {}
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT extends AuthResponse {
    error?: string;
  }
}
