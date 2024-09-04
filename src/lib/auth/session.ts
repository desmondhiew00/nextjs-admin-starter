import { omit } from "lodash";
import * as AuthAction from "./actions/auth-action";
import * as SessionManager from "./actions/session-manager";
import type { Session, SessionUser } from "./actions/types";
import { AUTH_PATH } from "./configs";

let memoizeGetSession: Promise<{
  session: Omit<Session, "refreshToken"> | null;
  expired: boolean;
}> | null = null;
export const getSession = () => {
  if (memoizeGetSession) return memoizeGetSession;

  memoizeGetSession = (async () => {
    const isServer = typeof window === "undefined";
    const { session, expired } = await SessionManager.getSession(isServer ? "server" : "client");
    memoizeGetSession = null;
    return { session: omit(session, ["refreshToken"]), expired };
  })();

  return memoizeGetSession;
};

export const getSessionUser = async () => {
  const session = await SessionManager.getSessionData();
  return session?.user;
};

export const updateSessionUser = (user: Partial<SessionUser>) => {
  return SessionManager.updateSessionUser(user);
};

export const signIn = async (email: string, password: string) => {
  const data = await AuthAction.signInRequest(email, password);
  if (data) await SessionManager.setSession(data);
  if (typeof window !== "undefined") {
    window.location.href = "/";
  }
};

export const signOut = async () => {
  AuthAction.signOutRequest();
  await SessionManager.clearSession();
  if (typeof window !== "undefined") {
    window.location.href = AUTH_PATH;
  }
};
