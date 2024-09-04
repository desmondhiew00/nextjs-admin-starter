"use server";

import apiFetcher from "@/lib/api-fetcher";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { AUTH_PATH } from "../configs";
import { clearSession, setSession } from "./session-manager";
import type { AuthApiResponse } from "./types";

const loginApiUrl = "/auth/login";
const refreshTokenApiUrl = "/auth/refresh-token";

export const signInRequest = async (email: string, password: string) => {
  const res = await apiFetcher<AuthApiResponse>(loginApiUrl, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (res?.data) setSession(res.data);
};

export const refreshTokenRequest = async (refreshToken?: string): Promise<AuthApiResponse | null> => {
  try {
    const res = await apiFetcher<AuthApiResponse>(refreshTokenApiUrl, {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    });
    return res.data;
  } catch (_e) {
    return null;
  }
};

export const signOutRequest = async () => {
  clearSession();
  revalidatePath("/");
  redirect(AUTH_PATH);
};
