import { validateResetPasswordToken } from "@/modules/auth/auth.action";
import ResetPasswordForm from "@/modules/auth/reset-password-form";
import type { PageProps } from "@/types";
import { get } from "lodash";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default async function ResetPasswordPage(props: PageProps) {
  const token = props.searchParams?.token as string;
  if (!token) notFound();

  let email = "";
  try {
    const res = await validateResetPasswordToken(token);
    if (res.error) notFound();
    email = get(res, "email") || "";
  } catch (_e) {
    notFound();
  }

  return <ResetPasswordForm token={token} email={email} />;
}
