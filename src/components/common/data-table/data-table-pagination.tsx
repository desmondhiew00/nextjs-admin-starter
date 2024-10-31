import { ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import type { Table } from "@tanstack/react-table";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useQueryRouter } from "@/hooks/use-query-router";
import { QueryKeys } from "@/lib/query-router";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  total: number;
  selectable?: boolean;
}

const pageSizes = [10, 20, 30, 40, 50];

export function DataTablePagination<TData>({ table, selectable, total }: DataTablePaginationProps<TData>) {
  const { setQueryParam, searchParams } = useQueryRouter();

  const pageSize = Number(searchParams.get("pageSize")) || 10;
  const page = Number(searchParams.get("page")) || 1;
  const pageCount = Math.ceil(total / Number(pageSize));
  const hasPrevPage = page > 1;
  const hasNextPage = page < pageCount;

  useEffect(() => {
    table?.setPageSize(Number(pageSize));
  }, [pageSize, table]);

  const goToPage = (num: number) => {
    let updatedNum = num;
    if (updatedNum === page) return;
    if (updatedNum > pageCount) {
      updatedNum = pageCount;
    } else if (updatedNum < 1) {
      updatedNum = 1;
    }
    setQueryParam(QueryKeys.Page, `${updatedNum}`);
  };

  const nextPage = () => {
    setQueryParam(QueryKeys.Page, `${page + 1}`);
  };

  const prevPage = () => {
    setQueryParam(QueryKeys.Page, `${page - 1}`);
  };

  const onChangePageSize = (value: string) => {
    setQueryParam(QueryKeys.PageSize, value);
    table.setPageSize(Number(value));
    goToPage(1);
  };

  return (
    <div className="flex items-center justify-between px-2 flex-wrap">
      <div>
        {selectable ? (
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
            selected.
          </div>
        ) : (
          <div />
        )}
        <span className="text-sm font-medium">Total {total} rows</span>
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select value={`${pageSize}`} onValueChange={onChangePageSize}>
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizes.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center">
          <div className="flex w-[100px] items-center justify-center text-sm font-medium">
            Page {page} of {pageCount}
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => goToPage(1)}
              disabled={!hasPrevPage}
            >
              <span className="sr-only">Go to first page</span>
              <DoubleArrowLeftIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={prevPage} disabled={!hasPrevPage}>
              <span className="sr-only">Go to previous page</span>
              <ChevronLeftIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-8 w-8 p-0" onClick={nextPage} disabled={!hasNextPage}>
              <span className="sr-only">Go to next page</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hidden h-8 w-8 p-0 lg:flex"
              onClick={() => goToPage(pageCount)}
              disabled={!hasNextPage}
            >
              <span className="sr-only">Go to last page</span>
              <DoubleArrowRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
