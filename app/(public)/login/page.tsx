import { AppName } from "@/configs/app.config";
import AuthPageTitle from "@/modules/auth/auth-page-title";
import LoginForm from "@/modules/auth/login-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function LoginPage() {
  return (
    <>
      <AuthPageTitle title={AppName} subtitle="Sign in to your account to continue" />
      <LoginForm />
    </>
  );
}
