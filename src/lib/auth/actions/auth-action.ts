"use server";

import apiFetcher from "@/lib/api-fetcher";
import type { AuthApiResponse } from "./types";

const loginApiUrl = "/auth/login";
const refreshTokenApiUrl = "/auth/refresh-token";

export const signInRequest = async (email: string, password: string) => {
  const res = await apiFetcher<AuthApiResponse>(loginApiUrl, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (res?.data) return res.data;
  return null;
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
  //
};
