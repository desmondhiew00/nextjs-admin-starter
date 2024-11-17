"use client";

import { primaryColor } from "@/configs/app.config";
import { ConfirmConfirmModalContextProvider } from "@/context/confirm-modal-context";
import { SessionProvider } from "next-auth/react";
import { AppProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";

import { QueryProvider } from "./query-provider";
import ThemeProvider from "./theme-provider";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <QueryProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <ConfirmConfirmModalContextProvider>
              <Suspense fallback={null}>{children}</Suspense>
            </ConfirmConfirmModalContextProvider>
          </SessionProvider>
        </ThemeProvider>
      </QueryProvider>

      <AppProgressBar
        height="2px"
        color={primaryColor}
        options={{ showSpinner: false }}
        shallowRouting={false}
        shouldCompareComplexProps
      />
    </>
  );
}
