import { get } from "lodash";
import "server-only";
import type { AuthApiResponse } from "../types";

const loginApiUrl = "/auth/login";
const refreshTokenApiUrl = "/auth/refresh-token";

export const signInRequest = async (email: string, password: string) => {
  try {
    const res = await fetch(getApiUrl(loginApiUrl), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    await handleApiError(res);
    const data = (await res.json()) as AuthApiResponse;
    return { error: null, data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "An error occurred" };
  }
};

export const refreshTokenRequest = async (refreshToken?: string) => {
  try {
    const res = await fetch(getApiUrl(refreshTokenApiUrl), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    await handleApiError(res);
    const data = (await res.json()) as AuthApiResponse;
    return { error: null, data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "An error occurred" };
  }
};

export const signOutRequest = async (refreshToken?: string) => {
  try {
    const res = await fetch(getApiUrl("/auth/logout"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
    await handleApiError(res);
    return { error: null, data: (await res.json()) as AuthApiResponse };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "An error occurred" };
  }
};

const getApiUrl = (path: string, params?: Record<string, string>) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) throw new Error("API_URL is not defined");
  let apiUrl = baseUrl + path;
  if (params) {
    const urlParams = new URLSearchParams(params);
    apiUrl += `?${urlParams.toString()}`;
  }
  return apiUrl;
};

const handleApiError = async (res: Response) => {
  if (res.ok) return;
  const data = await res.json();
  let err = get(data, "message");
  if (!err) get(data, "error");
  if (!err) err = JSON.stringify(data);
  throw new Error(err);
};
