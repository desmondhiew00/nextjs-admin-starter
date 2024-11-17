"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthListener = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === "RefreshAccessTokenError") {
      signOut();
    }
  }, [session]);

  return null;
};

export default AuthListener;
