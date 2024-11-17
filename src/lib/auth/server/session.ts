import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import "server-only";
import type { Session } from "../types";
import { decrypt, encrypt } from "./encryption";

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
    console.log("------ New session: ", session.refreshToken);
    const encrypted = await encrypt(JSON.stringify(session));
    if (encrypted.error) throw new Error(encrypted.error);
    if (!encrypted.result) throw new Error("Failed to encrypt session");
    (await cookies()).set(COOKIE_NAME, encrypted.result, {
      httpOnly: true,
      secure: process.env.COOKIE_SECURE !== "false",
      maxAge: 30 * 24 * 60 * 60, // 30 days
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      path: "/",
      sameSite: "lax",
    });
    return { error: null };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to set session" };
  }
};

export const clearSession = async () => {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    revalidatePath("/");
    return { error: null };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to clear session" };
  }
};

export const updateSessionUser = async (user: Partial<Session["user"]>) => {
  const originalSession = await getSessionData();
  const newUser = Object.assign({}, originalSession?.user, user);
  setSession(Object.assign({}, originalSession, { user: newUser }));
  return { error: null };
};
