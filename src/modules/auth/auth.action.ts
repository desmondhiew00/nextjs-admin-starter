"use server";

import { apiFetcher } from "@/lib/api-fetcher";

export async function sendForgotPasswordLink(email: string) {
  const response = await apiFetcher("/auth/forgot-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  const { data } = response;
  return data;
}

export async function validateResetPasswordToken(token: string) {
  const response = await apiFetcher("/auth/validate-forgot-password-token", {
    method: "GET",
    params: { token },
  });
  const { data } = response;
  return data;
}

export async function resetPassword(token: string, password: string) {
  const response = await apiFetcher("/auth/reset-password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, password }),
  });
  return response.data;
}
