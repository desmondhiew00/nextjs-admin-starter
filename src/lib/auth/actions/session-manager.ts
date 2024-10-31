"use server";

import { differenceInMinutes, fromUnixTime } from "date-fns";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import * as AuthAction from "./auth-action";
import { decrypt, encrypt } from "./encryption";
import type { Session } from "./types";

const COOKIE_NAME = "auth-session";

export const getSessionData = async () => {
  const encrypted = (await cookies()).get(COOKIE_NAME);
  if (!encrypted?.value) return null;
  const descrypted = await decrypt(encrypted?.value);
  if (!descrypted.result) return null;

  try {
    return JSON.parse(descrypted.result) as Session;
  } catch (_e) {
    return null;
  }
};

export const setSession = async (session: Session) => {
  try {
    const encrypted = await encrypt(JSON.stringify(session));
    if (encrypted.error) throw new Error(encrypted.error);
    if (!encrypted.result) throw new Error("Failed to encrypt session");
    (await cookies()).set(COOKIE_NAME, encrypted.result, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE !== "false",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      path: "/",
    });
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to set session" };
  }
};

export const clearSession = async () => {
  try {
    (await cookies()).delete(COOKIE_NAME);
    revalidatePath("/");
    return { error: null };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to clear session" };
  }
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
        const res = await AuthAction.refreshTokenRequest(session.refreshToken);
        if (res.error) return { session: null, expired: true, error: res.error };
        if (res.data) {
          setSession(res.data);
          return { session: res.data, expired: res.data === null };
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
