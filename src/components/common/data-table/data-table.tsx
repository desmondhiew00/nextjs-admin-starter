"use client";

import type { Table as TypeTable } from "@tanstack/react-table";
import {
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

import { get } from "lodash";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar, type DataTableToolbarProps } from "./data-table-toolbar";

interface DataTableProps<TData, TValue> {
  ssr?: boolean;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  loading?: boolean;
  selectable?: boolean;
  toolbar?: boolean;
  toolbarProps?: Omit<React.ComponentProps<typeof DataTableToolbar>, "table">;
  toolbarChildren?: React.ReactNode;
  toolbarChildrenRight?: React.ReactNode;
  defaultParams?: Record<string, string>;
  facetFilters?: DataTableToolbarProps<TData>["facetFilters"];
  dateRangeFilter?: boolean | { placeholder: string };
  total: number;
}

export interface DataTableRef<TData> {
  table: TypeTable<TData>;
  getSelectedRows: () => TData[];
}

/**
 * Data table with ref
 */
export function createDataTable<TData, TValue>() {
  const DataTable = React.forwardRef<DataTableRef<TData>, DataTableProps<TData, TValue>>((props, ref) => {
    const { columns, data, selectable, toolbar } = props;
    const loading = props.loading;

    const [rowSelection, setRowSelection] = React.useState({});
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);

    React.useImperativeHandle(ref, () => ({
      table,
      getSelectedRows: () => {
        return table.getSelectedRowModel().rows.map((row) => row.original);
      },
    }));

    const table = useReactTable({
      data,
      columns: selectable ? [selectColumn as ColumnDef<TData, TValue>, ...columns] : columns,
      state: {
        sorting,
        columnVisibility,
        rowSelection,
        columnFilters,
      },
      enableRowSelection: true,
      onRowSelectionChange: setRowSelection,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onColumnVisibilityChange: setColumnVisibility,
      getCoreRowModel: getCoreRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
    });

    return (
      <div className="space-y-2">
        {toolbar ? (
          <DataTableToolbar
            {...props.toolbarProps}
            table={table}
            ssr={props.ssr}
            defaultParams={props.defaultParams}
            facetFilters={props.facetFilters}
            dateRangeFilter={props.dateRangeFilter}
            loading={loading}
            childrenRight={props.toolbarChildrenRight}
          >
            {props.toolbarChildren}
          </DataTableToolbar>
        ) : null}
        <div className="rounded-2xl border bg-background">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const width = header.getSize();
                    const label = get(header.column.columnDef.meta, "label", "");
                    const labelAsHeader = get(header.column.columnDef.meta, "asHeader", false);
                    const center = get(header.column.columnDef.meta, "center", false);
                    return (
                      <TableHead
                        key={header.id}
                        className="pl-2"
                        colSpan={header.colSpan}
                        style={width !== 150 ? { width, minWidth: width } : {}}
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              labelAsHeader && label ? (
                                <DataTableColumnHeader
                                  column={header.column}
                                  center={center}
                                  title={get(header.column.columnDef.meta, "label", "")}
                                />
                              ) : (
                                header.column.columnDef.header
                              ),
                              header.getContext(),
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="relative">
              {loading ? (
                <TableRow
                  className="absolute z-20 flex h-full w-full items-center justify-center top-0"
                  style={{ backdropFilter: "blur(2px)" }}
                >
                  <td>
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </td>
                </TableRow>
              ) : null}

              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                    {row.getVisibleCells().map((cell) => {
                      // @ts-ignore
                      const customCss = cell.column.columnDef?.className || "";
                      return (
                        <TableCell key={cell.id} className={cn("pl-5", customCss)}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {loading ? "" : "No results."}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <DataTablePagination table={table} selectable={selectable} total={props.total} />
      </div>
    );
  });

  DataTable.displayName = "DataTable";
  return React.memo(DataTable);
}

export const DataTable = <TData, TValue>(props: DataTableProps<TData, TValue>) => {
  const { columns, data, selectable, toolbar = true } = props;
  const loading = props.loading;

  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns: selectable ? [selectColumn as ColumnDef<TData, TValue>, ...columns] : columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <div className="space-y-4">
      {toolbar ? (
        <DataTableToolbar
          {...props.toolbarProps}
          table={table}
          ssr={props.ssr}
          defaultParams={props.defaultParams}
          facetFilters={props.facetFilters}
          dateRangeFilter={props.dateRangeFilter}
          loading={loading}
          childrenRight={props.toolbarChildrenRight}
        >
          {props.toolbarChildren}
        </DataTableToolbar>
      ) : null}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const width = header.getSize();
                  const label = get(header.column.columnDef.meta, "label", "");
                  const labelAsHeader = get(header.column.columnDef.meta, "asHeader", false);
                  const center = get(header.column.columnDef.meta, "center", false);
                  return (
                    <TableHead
                      className="pl-2"
                      key={header.id}
                      colSpan={header.colSpan}
                      style={width !== 150 ? { width } : {}}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            labelAsHeader && label ? (
                              <DataTableColumnHeader
                                column={header.column}
                                center={center}
                                title={get(header.column.columnDef.meta, "label", "")}
                              />
                            ) : (
                              header.column.columnDef.header
                            ),
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="relative">
            {loading ? (
              <TableRow
                className="absolute z-20 flex h-full w-full items-center justify-center top-0"
                style={{ backdropFilter: "blur(2px)" }}
              >
                <td>
                  <Loader2 className="h-5 w-5 animate-spin" />
                </td>
              </TableRow>
            ) : null}

            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => {
                    // @ts-ignore
                    const customCss = cell.column.columnDef?.className || "";
                    return (
                      <TableCell key={cell.id} className={cn("pl-5", customCss)}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {loading ? "" : "No results."}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} selectable={selectable} total={props.total} />
    </div>
  );
};

const selectColumn: ColumnDef<unknown, unknown> = {
  id: "select",
  size: 40,
  header: ({ table }) => (
    <Checkbox
      checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      aria-label="Select all"
      className="translate-y-[2px]"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
      className="translate-y-[2px]"
    />
  ),
  enableSorting: false,
  enableHiding: false,
};
