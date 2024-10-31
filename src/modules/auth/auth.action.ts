"use server";

import { apiFetcher } from "@/lib/api-fetcher";

export async function sendForgotPasswordLink(email: string) {
  try {
    const response = await apiFetcher("/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const { data } = response;
    return { error: null, data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to send forgot password link" };
  }
}

export async function validateResetPasswordToken(token: string) {
  try {
    const response = await apiFetcher("/auth/validate-forgot-password-token", {
      method: "GET",
      params: { token },
    });
    const { data } = response;
    return { error: null, data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to validate reset password token" };
  }
}

export async function resetPassword(token: string, password: string) {
  try {
    const response = await apiFetcher("/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    return { error: null, data: response.data };
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Failed to reset password" };
  }
}
