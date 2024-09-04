import ResetPasswordForm from "@/modules/auth/reset-password-form";
import type { PageProps } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Reset Password",
};

export default async function ResetPasswordPage(props: PageProps) {
  const token = props.searchParams?.token as string;
  if (!token) notFound();

  // try {
  //   await validateResetPasswordToken(token);
  // } catch (_e) {
  //   notFound();
  // }

  return <ResetPasswordForm token={token} />;
}
