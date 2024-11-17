"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DataTableRowActionsProps<_TData> {
  center?: boolean;
  showDelete?: boolean;
  deleteText?: string;
  onDelete?: () => void;
  showEdit?: boolean;
  editText?: string;
  onEdit?: () => void;
  options?: { label: string; className?: string; onClick: () => void }[];
  children?: React.ReactNode;
}

export function DataTableRowActions<TData>({ center, ...props }: DataTableRowActionsProps<TData>) {
  const [open, setOpen] = useState(false);
  const { showEdit = true, showDelete = true, editText = "Edit", deleteText = "Delete" } = props;

  useEffect(() => {
    if (showDelete) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Backspace" && event.metaKey) {
          props.onDelete?.();
          setOpen(false);
        }
      };

      if (open) {
        window.addEventListener("keydown", handleKeyDown);
      } else {
        window.removeEventListener("keydown", handleKeyDown);
      }
      return () => {
        if (showDelete) window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open]);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn("flex h-8 w-8 p-0 data-[state=open]:bg-muted", center ? "mx-auto" : undefined)}
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {props.options?.map((option) => (
          <DropdownMenuItem className={option.className} key={option.label} onClick={option.onClick}>
            {option.label}
          </DropdownMenuItem>
        ))}
        {showEdit ? <DropdownMenuItem onClick={props.onEdit}>{editText}</DropdownMenuItem> : null}
        {showEdit && showDelete ? <DropdownMenuSeparator /> : null}
        {showDelete ? (
          <DropdownMenuItem className="text-red-500 focus:bg-red-500 focus:text-white" onClick={props.onDelete}>
            {deleteText}
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        ) : null}
        {props.children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
