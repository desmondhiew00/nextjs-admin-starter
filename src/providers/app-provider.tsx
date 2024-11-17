"use client";

import { AppProgressBar } from "next-nprogress-bar";
import type React from "react";

import { primaryColor } from "@/configs/app.config";
import { ConfirmConfirmModalContextProvider } from "@/context/confirm-modal-context";

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
          <ConfirmConfirmModalContextProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </ConfirmConfirmModalContextProvider>
        </ThemeProvider>
      </QueryProvider>

      <AppProgressBar
        height="4px"
        color={primaryColor}
        options={{ showSpinner: false }}
        shallowRouting={false}
        shouldCompareComplexProps
      />
    </>
  );
}
