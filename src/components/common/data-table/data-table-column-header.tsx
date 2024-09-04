import { ArrowDownIcon, ArrowUpIcon, CaretSortIcon, EyeNoneIcon } from "@radix-ui/react-icons";
import type { Column } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useQueryRouter } from "@/hooks/use-query-router";
import { cn } from "@/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  ssr?: boolean;
  center?: boolean;
  sortable?: boolean;
  sortType?: "query" | "client";
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  center,
  sortable = true,
  sortType = "query",
}: DataTableColumnHeaderProps<TData, TValue>) {
  const { setSort } = useQueryRouter();

  if (!column.getCanSort() || !sortable) {
    return (
      <div className={cn(center ? "flex items-center justify-center" : "ml-[12px]", "text-xs", className)}>{title}</div>
    );
  }

  const toggleSort = (isDesc: boolean) => {
    if (sortType === "client") {
      column.toggleSorting(isDesc);
    } else if (column.id) {
      setSort(column.id, isDesc ? "desc" : "asc");
    }
  };

  const centerCss = center ? "!pl-[24px] justify-center" : "";
  return (
    <div className={cn("flex items-center space-x-2", centerCss, className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 data-[state=open]:bg-accent">
            <span>{title}</span>
            {sortable && (
              <>
                {column.getIsSorted() === "desc" ? (
                  <ArrowDownIcon className="ml-2 h-4 w-4" />
                ) : column.getIsSorted() === "asc" ? (
                  <ArrowUpIcon className="ml-2 h-4 w-4" />
                ) : (
                  <CaretSortIcon className="ml-2 h-4 w-4" />
                )}
              </>
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          {sortable && (
            <>
              <DropdownMenuItem onClick={() => toggleSort(false)}>
                <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                Asc
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleSort(true)}>
                <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
                Desc
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
