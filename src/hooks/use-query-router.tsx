import * as qr from "@/lib/query-router";
import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useQueryRouter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  let current = new URLSearchParams(Array.from(searchParams.entries()));

  const updateQueryParam = (reset?: boolean) => {
    const search = reset ? "" : current.toString();
    const query = search ? `?${search}` : "";
    router.replace(`${pathname}${query}` as Route);
    router.refresh();
  };

  const setQueryParam = (key: qr.QueryKeys, value: string | null | undefined) => {
    if (!value) current.delete(key);
    else current.set(key, value);
    updateQueryParam();
  };

  const setCustomQueryParam = (key: string, value: string | null | undefined) => {
    if (!value) current.delete(key);
    else current.set(key, value);
    updateQueryParam();
  };

  const resetQueryParams = (data?: Record<string, string>) => {
    if (data) {
      current = new URLSearchParams(data);
      updateQueryParam();
    } else {
      updateQueryParam(true);
    }
  };

  const setSort = (key: string, direction: "asc" | "desc") => {
    current.set(qr.QueryKeys.Sort, `${key}:${direction}`);
    updateQueryParam();
  };

  /**
   * Getter functions
   */
  const hasFilter = (keys?: string[]) => qr.hasFilterParams(searchParams, "client", keys);
  const getPagination = () => qr.getPagination(searchParams, "client");
  const getSort = () => qr.getSorting(searchParams, "client");
  const getDateFilter = () => qr.getDateRangeFilter(searchParams, "client");
  const getListingQueryParams = () => qr.getListingQueryParams(searchParams, "client");

  return {
    router,
    pathname,
    searchParams,
    current,
    hasFilter,
    setQueryParam,
    setCustomQueryParam,
    resetQueryParams,
    getPagination,
    setSort,
    getSort,
    getDateFilter,
    getListingQueryParams,
  };
};
