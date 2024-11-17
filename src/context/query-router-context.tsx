"use client";

import { useSearchParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface QueryRouterContext {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const QueryRouterContext = createContext<QueryRouterContext>({
  loading: false,
  setLoading: () => {},
});

export const QueryRouterProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (loading) setLoading(false);
  }, [searchParams]);

  const contextValue = { loading, setLoading };
  return <QueryRouterContext.Provider value={contextValue}>{children}</QueryRouterContext.Provider>;
};

export const useQueryRouterContext = () => {
  const context = useContext(QueryRouterContext);
  if (context === undefined) throw new Error("useQueryRouter must be used within a QueryRouterProvider");
  return context;
};
