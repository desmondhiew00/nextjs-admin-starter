import { endOfDay, startOfDay } from "date-fns";
import type { ReadonlyURLSearchParams } from "next/navigation";

import type { SearchParams } from "@/types";

import { toDbDateTime } from "./date";

export enum QueryKeys {
  Page = "page",
  PageSize = "pageSize",
  Sort = "sort",
  FromDate = "fromDate",
  ToDate = "toDate",
}

type Mode = "server" | "client";

export const getPagination = (searchParams: ReadonlyURLSearchParams | SearchParams, mode: Mode) => {
  const page = Number(getParam(searchParams, QueryKeys.Page, mode)) || 1;
  const pageSize = Number(getParam(searchParams, QueryKeys.PageSize, mode)) || 10;
  const limit = pageSize;
  const offset = (page - 1) * pageSize;
  return { page, pageSize, limit, offset };
};

export const getSorting = (
  searchParams: ReadonlyURLSearchParams | SearchParams,
  mode: Mode,
): { sortBy: string | null; direction: "asc" | "desc" } => {
  const sort = getParam(searchParams, QueryKeys.Sort, mode);
  if (typeof sort === "string") {
    const [sortBy, value] = sort.split(":");
    const direction = value === "asc" ? "asc" : "desc";
    return { sortBy, direction };
  }
  return { sortBy: null, direction: "asc" };
};

type DateRange = {
  from: string | null;
  to: string | null;
};
export const getDateRangeFilter = (searchParams: ReadonlyURLSearchParams | SearchParams, mode: Mode): DateRange => {
  const from = getParam(searchParams, QueryKeys.FromDate, mode);
  const to = getParam(searchParams, QueryKeys.ToDate, mode);

  const result: DateRange = { from: null, to: null };
  if (from && typeof from === "string") {
    result.from = toDbDateTime(startOfDay(from));
  }
  if (to && typeof to === "string") {
    result.to = toDbDateTime(endOfDay(to));
  }
  return result;
};

export const hasFilterParams = (
  searchParams: ReadonlyURLSearchParams | SearchParams,
  mode: Mode,
  include?: string[],
) => {
  const exclude: string[] = [QueryKeys.Page, QueryKeys.PageSize];

  if (mode === "server") {
    const params = Object.keys(searchParams as SearchParams);
    if (include && include?.length > 0) {
      return params.some((key) => include.includes(key));
    }
    return params.some((key) => !exclude.includes(key));
  }
  if (mode === "client") {
    const params = Array.from((searchParams as ReadonlyURLSearchParams).keys());
    if (include && include?.length > 0) {
      return params.some((key) => include.includes(key));
    }
    return params.some((key) => !exclude.includes(key));
  }
};

export const getListingQueryParams = (searchParams: ReadonlyURLSearchParams | SearchParams, mode: Mode) => {
  const { limit, offset } = getPagination(searchParams, mode);
  const { from, to } = getDateRangeFilter(searchParams, mode);
  const { sortBy, direction } = getSorting(searchParams, mode);

  return {
    limit,
    offset,
    from,
    to,
    sortBy,
    direction,
  };
};

const getParam = (searchParams: ReadonlyURLSearchParams | SearchParams, key: string, mode: Mode) => {
  if (mode === "client") {
    return (searchParams as ReadonlyURLSearchParams).get(key);
  }
  return (searchParams as SearchParams)[key];
};
