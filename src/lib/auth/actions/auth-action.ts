"use server";

import apiFetcher from "@/lib/api-fetcher";
import type { AuthApiResponse } from "./types";

const loginApiUrl = "/auth/login";
const refreshTokenApiUrl = "/auth/refresh-token";

export const signInRequest = async (email: string, password: string) => {
  try {
    const res = await apiFetcher<AuthApiResponse>(loginApiUrl, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (res?.data) return { error: null, data: res.data };
    return { error: "An error occurred" };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "An error occurred" };
  }
};

export const refreshTokenRequest = async (refreshToken?: string) => {
  try {
    const res = await apiFetcher<AuthApiResponse>(refreshTokenApiUrl, {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    });
    if (res?.data) return { error: null, data: res.data };
    return { error: "An error occurred" };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "An error occurred" };
  }
};

export const signOutRequest = async (refreshToken: string) => {
  try {
    const res = await apiFetcher<AuthApiResponse>("/auth/logout", {
      method: "POST",
      body: JSON.stringify({ refreshToken }),
    });
    if (!res.ok) throw new Error("An error occurred");
    return { error: null, data: res.data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "An error occurred" };
  }
};
