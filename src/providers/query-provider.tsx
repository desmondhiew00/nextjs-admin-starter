"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError: (e) => {
        if (process.env.NODE_ENV === "development") {
          console.error(`Query Error: ${e}`);
        }
        return false;
      },
    },
    mutations: {
      onError: (e) => {
        if (process.env.NODE_ENV === "development") {
          console.error(`Mutation Error: ${e}`);
        }
      },
    },
  },
});
export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
