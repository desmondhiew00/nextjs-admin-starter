import { omit } from "lodash";
import type { PropsWithChildren } from "react";
import { getSession } from "../actions/session-manager";
import { AuthGuard } from "./auth-guard";

export const AuthProvider: React.FC<PropsWithChildren> = async ({ children }) => {
  const { session, expired } = await getSession("server");
  return (
    <AuthGuard session={omit(session, ["refreshToken"])} expired={expired}>
      {children}
    </AuthGuard>
  );
};
