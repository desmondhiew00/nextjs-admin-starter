"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import type { Table } from "@tanstack/react-table";
import { format } from "date-fns";
import { type ChangeEvent, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { DateRange } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQueryRouter } from "@/hooks/use-query-router";
import { QueryKeys } from "@/lib/query-router";

import { DateRangePicker, type DateRangePickerRef } from "../date-range-picker";
import { DataTableFacetedFilter, type DataTableFacetedFilterProps } from "./data-table-faceted-filter";
import { DataTableViewOptions } from "./data-table-view-options";

const MemoizedDateRangePicker = memo(DateRangePicker);
const MemoizedDataTableFacetedFilter = memo(DataTableFacetedFilter);

export interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  ssr?: boolean;
  searchKey?: string;
  placeholder?: string;
  children?: React.ReactNode;
  childrenRight?: React.ReactNode;
  defaultParams?: Record<string, string>;
  facetFilters?: Omit<DataTableFacetedFilterProps<TData, TData>, "column">[];
  dateRangeFilter?: boolean | { placeholder: string };
  loading?: boolean;
}

export function DataTableToolbar<TData>(props: DataTableToolbarProps<TData>) {
  const { table, placeholder, searchKey = "keyword", children, facetFilters = [], loading } = props;

  const dateRef = useRef<DateRangePickerRef>(null);

  const { searchParams, hasFilter, setQueryParam, setCustomQueryParam, resetQueryParams } = useQueryRouter();
  const [keyword, setKeyword] = useState(searchParams.get(searchKey) || "");

  const queryValue = searchParams.get(searchKey) || "";
  const dateRange = useMemo(() => getDateRangeFromQuery(searchParams), [searchParams]);
  const isFiltered = hasFilter();

  /**
   * Handle keyword search
   */
  useEffect(() => {
    setKeyword(queryValue || "");
  }, [queryValue]);

  const onValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setKeyword(value);
    if (!value) setCustomQueryParam(searchKey, null);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCustomQueryParam(searchKey, keyword);
    }
  };

  /**
   * Clear all filters
   */
  const clearFilters = () => {
    dateRef.current?.clear();
    setKeyword("");
    resetQueryParams(props.defaultParams);
    table.resetSorting();
  };

  /**
   * Handle date range filter
   */
  const onSelectDate = useCallback((date: DateRange | undefined) => {
    if (date) {
      if (date.from) setQueryParam(QueryKeys.FromDate, format(date.from, "yyyy-MM-dd"));
      if (date.to) setQueryParam(QueryKeys.ToDate, format(date.to, "yyyy-MM-dd"));
    } else {
      setQueryParam(QueryKeys.FromDate, null);
      setQueryParam(QueryKeys.ToDate, null);
    }
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-2">
      <div className="flex flex-1 flex-wrap items-center gap-2">
        <Input
          id="data-table-toolbar-search-input"
          placeholder={placeholder || "Search"}
          value={keyword}
          disabled={loading}
          onKeyDown={onEnter}
          onChange={onValueChange}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {facetFilters?.map((filter) => (
          <MemoizedDataTableFacetedFilter key={filter.searchKey || filter.title} {...filter} />
        ))}
        {props.dateRangeFilter ? (
          <MemoizedDateRangePicker
            ref={dateRef}
            buttonClassName="border-dashed"
            size="sm"
            disabled={loading}
            placeholder={typeof props.dateRangeFilter === "object" ? props.dateRangeFilter.placeholder : undefined}
            confirm
            defaultValue={dateRange}
            onConfirm={onSelectDate}
          />
        ) : null}
        {children}
        {isFiltered && (
          <Button variant="ghost" onClick={clearFilters} className="h-8 px-2 lg:px-3" disabled={loading}>
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex items-center">
        <DataTableViewOptions table={table} />
        {props.childrenRight}
      </div>
    </div>
  );
}

const getDateRangeFromQuery = (searchParams: URLSearchParams) => {
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  return {
    from: startDate ? new Date(startDate) : undefined,
    to: endDate ? new Date(endDate) : undefined,
  };
};
