"use server";

import { differenceInSeconds, fromUnixTime } from "date-fns";
import { omit } from "lodash";
import { redirect } from "next/navigation";
import { AUTH_PATH } from "./configs";
import * as AuthAction from "./server/auth-api";
import { clearSession, getSessionData, setSession, updateSessionUser as updateSessionUserData } from "./server/session";
import type { Session, SessionUser } from "./types";

export const signIn = async (email: string, password: string) => {
  const res = await AuthAction.signInRequest(email, password);
  if (res.error) throw new Error(res.error);
  if (res.data) await setSession(res.data);
};

export const signOut = async () => {
  const session = await getSessionData();
  AuthAction.signOutRequest(session?.refreshToken);
  await clearSession();
  redirect(AUTH_PATH);
};

let memoizeGetSession: Promise<{
  session: Omit<Session, "refreshToken"> | null;
  expired: boolean;
}> | null = null;
export const getSession = async () => {
  if (memoizeGetSession) return memoizeGetSession;

  memoizeGetSession = (async () => {
    const session = await getSessionData();
    if (!session) return { session: null, expired: true };

    const timeRemainInSec = differenceInSeconds(fromUnixTime(session.accessTokenExpiresIn), new Date());
    const expired = timeRemainInSec < 1;
    if (expired) {
      const res = await AuthAction.refreshTokenRequest(session.refreshToken);
      if (res.error) return { session: null, expired: true, error: res.error };
      if (res.data) {
        await setSession(res.data);
        return { session: res.data, expired: res.data === null };
      }
    }
    return { session: omit(session, ["refreshToken"]), expired };
  })().finally(() => {
    memoizeGetSession = null;
  });

  return memoizeGetSession;
};

export const updateSessionUser = async (user: Partial<SessionUser>) => {
  await updateSessionUserData(user);
};
