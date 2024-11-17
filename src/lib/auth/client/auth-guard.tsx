"use client";

import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import type React from "react";
import { type PropsWithChildren, createContext, useContext, useEffect } from "react";
import { getSession, signOut } from "../auth";
import { isPublicRoute } from "../configs";
import type { Session } from "../types";

interface Props {
  session: Omit<Session, "refreshToken"> | null;
  expired: boolean;
}
export const AuthGuard: React.FC<PropsWithChildren<Props>> = ({ session, expired, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const publicRoute = isPublicRoute(pathname);

  useEffect(() => {
    if (publicRoute) return;

    (async () => {
      try {
        const newSession = await getSession();
        if (!newSession || !newSession.session || newSession.expired) {
          signOut();
        }
      } catch (_e) {
        signOut();
      }
    })();
  }, [router, pathname, session, expired]);

  let valid = publicRoute;
  if (!publicRoute && !!session) valid = true;

  return <AuthContext.Provider value={{ session }}>{valid ? children : null}</AuthContext.Provider>;
};

interface AuthContext {
  session: Omit<Session, "refreshToken"> | null;
}

const AuthContext = createContext<AuthContext>({
  session: null,
});

export const useAuthSession = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuthSession must be used within a AuthProvider");

  return context.session;
};
