import "@/styles/globals.css";

import { Toaster } from "@/components/ui/sonner";
import { AppName } from "@/configs/app.config";
import { AuthProvider } from "@/lib/auth/client";
import Providers from "@/providers/app-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: AppName,
    template: `${AppName} | %s`,
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Suspense fallback={null}>
          <AuthProvider>
            <Providers>
              <Suspense fallback={null}>{children}</Suspense>
              <Toaster richColors expand />
            </Providers>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
