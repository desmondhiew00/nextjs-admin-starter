"use server";

import { revalidatePage } from "@/actions/server-action";
import { differenceInMinutes, fromUnixTime } from "date-fns";
import { cookies } from "next/headers";
import * as AuthAction from "./auth-action";
import { decrypt, encrypt } from "./encryption";
import type { Session } from "./types";

const COOKIE_NAME = "auth-session";

export const getSessionData = async () => {
  const encrypted = cookies().get(COOKIE_NAME);
  if (!encrypted?.value) return null;
  const descrypted = await decrypt(encrypted?.value);
  if (!descrypted) return null;

  try {
    return JSON.parse(descrypted) as Session;
  } catch (_e) {
    return null;
  }
};

export const setSession = async (session: Session) => {
  const encrypted = await encrypt(JSON.stringify(session));
  console.log("encrypted: ", encrypted);
  cookies().set(COOKIE_NAME, encrypted, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    path: "/",
  });
};

export const clearSession = async () => {
  revalidatePage("/");
  cookies().delete(COOKIE_NAME);
};

/**
 * Auto refresh token if called from client side
 * @returns
 */
export const getSession = async (
  type: "client" | "server",
): Promise<{ session: Session | null; expired: boolean; error?: unknown }> => {
  try {
    const session = await getSessionData();
    if (!session) return { session: null, expired: true };

    const timeRemainInMins = differenceInMinutes(fromUnixTime(session.accessTokenExpiredAt), new Date());

    if (timeRemainInMins < 5) {
      if (type === "client") {
        const newTokens = await AuthAction.refreshTokenRequest(session.refreshToken);
        if (newTokens) {
          setSession(newTokens);
          return { session: newTokens, expired: newTokens === null };
        }
        return { session: null, expired: true, error: "Failed to refresh token" };
      }

      return { session, expired: true };
    }

    return { session, expired: false };
  } catch (e) {
    if (type === "client") clearSession();
    return { session: null, expired: true, error: e };
  }
};

/**
 * Only work on client side
 */
export const validateSession = async () => {
  const { session, expired } = await getSession("client");
  if (!session || expired) {
    clearSession();
    return false;
  }
  return true;
};

export const updateSessionUser = async (user: Partial<Session["user"]>) => {
  const originalSession = await getSessionData();
  const newUser = Object.assign({}, originalSession?.user, user);
  setSession(Object.assign({}, originalSession, { user: newUser }));
};
