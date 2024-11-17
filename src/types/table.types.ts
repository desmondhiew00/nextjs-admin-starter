import type { ColumnDef } from "@tanstack/react-table";

export type Column<T> = ColumnDef<T, T> & {
  className?: string;
  meta?: {
    label?: string;
    asHeader?: boolean;
    center?: boolean;
  };
};
