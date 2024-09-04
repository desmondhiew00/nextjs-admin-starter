"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { type UIEvent, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { Spinner } from "./spinner";

export interface ComboBoxProps {
  value?: string;
  options: { label: string; value: string }[];
  placeholder?: string;
  showSearch?: boolean;
  searchText?: string;
  searchMethod?: "api" | "local";
  emptyResultText?: string;
  noDataText?: string;
  shouldFilter?: boolean; // enable inline filter
  width?: number | string;
  maxHeight?: number;
  disabled?: boolean;
  loading?: boolean;
  selectedValues?: string[];
  useValueType?: "default" | "selectedValues";
  closedOnSelect?: boolean;
  onReachBottom?: () => void;
  customFilter?: (value: string, search: string) => number;
  onKeywordChange?: (keyword: string) => void;
  onSelect?: (value: string) => void;
  onOpenChanged?: (open: boolean) => void;
}
export function Combobox(props: ComboBoxProps) {
  const {
    options,
    placeholder = "Select",
    width = 200,
    maxHeight = 250,
    disabled,
    closedOnSelect = true,
    showSearch = true,
  } = props;
  const emptyText = props.emptyResultText || "No results found.";
  const noDataText = props.noDataText || "No data.";
  const searchPlaceholder = props.searchText || "Search...";

  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(props.value || "");
  const [search, setSearch] = useState("");

  const selected = options.find((option) => option.value === value);
  const btnLabel = selected ? selected.label : placeholder;

  useEffect(() => {
    if (props.value !== value) {
      setValue(props.value || "");
    }
  }, [props.value]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    if (!props.onReachBottom) return;

    if (ref.current && ref.current.scrollHeight - ref.current.scrollTop === ref.current.clientHeight) {
      e.preventDefault();
      props.onReachBottom?.();
    }
  };

  const onSearchValueChanged = (val: string) => {
    setSearch(val);
    props.onKeywordChange?.(val);
  };

  useEffect(() => {
    props.onOpenChanged?.(open);
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between z-50"
          style={{ width }}
        >
          <>
            <span className="truncate">{btnLabel}</span>
            <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 z-50" style={{ width }}>
        <Command shouldFilter={props.shouldFilter} filter={props.customFilter}>
          {showSearch && (
            <CommandInput placeholder={searchPlaceholder} className="h-9" onValueChange={onSearchValueChanged} />
          )}
          {props.shouldFilter !== false ? (
            <CommandEmpty>{emptyText}</CommandEmpty>
          ) : options.length <= 0 && !props.loading && search ? (
            <div className="py-6 text-center text-sm">{emptyText}</div>
          ) : null}

          <CommandGroup
            ref={ref}
            className="overflow-auto"
            style={{ maxHeight }}
            onScroll={handleScroll}
            onWheel={(e) => {
              e.stopPropagation();
            }}
          >
            {options.length === 0 && !search && !props.loading && (
              <div className="py-6 text-center text-sm">{noDataText}</div>
            )}
            {options.map((data) => {
              let active = false;
              if (props.useValueType === "selectedValues" && props.selectedValues && props.selectedValues?.length > 0) {
                active = props.selectedValues.includes(data.value) || false;
              } else {
                active = data.value === value;
              }

              return (
                <CommandItem
                  key={data.value}
                  value={data.value}
                  onSelect={() => {
                    props.onSelect?.(data.value);
                    if (props.useValueType !== "selectedValues") setValue(data.value === value ? "" : data.value);
                    if (closedOnSelect) setOpen(false);
                  }}
                >
                  <CheckIcon className={cn("mr-2 h-4 w-4", active ? "opacity-100" : "opacity-0")} />
                  {data.label}
                </CommandItem>
              );
            })}
          </CommandGroup>

          {props.loading ? (
            <div className="mx-auto my-5">
              <Spinner mode="inline" loading />
            </div>
          ) : null}
        </Command>
      </PopoverContent>
    </Popover>
  );
}
