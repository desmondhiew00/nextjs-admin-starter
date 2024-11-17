import type { PropsWithChildren } from "react";
import { getSession } from "../auth";
import { AuthGuard } from "./auth-guard";

export const AuthProvider: React.FC<PropsWithChildren> = async ({ children }) => {
  const { session, expired } = await getSession();
  return (
    <AuthGuard session={session} expired={expired}>
      {children}
    </AuthGuard>
  );
};
