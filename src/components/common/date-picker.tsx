"use client";

import type { VariantProps } from "class-variance-authority";
import { format } from "date-fns";
import { CalendarIcon, XIcon } from "lucide-react";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

import { Button, type buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface DatePickerProps {
  className?: string;
  buttonClassName?: string;
  onSelectDate?: (range: Date | undefined) => void;
  placeholder?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
  defaultValue?: Date | undefined;
  confirm?: boolean;
  onConfirm?: (range: Date | undefined) => void;
  disabled?: boolean;
  selected?: Date | undefined;
  allowClear?: boolean;
}

export interface DatePickerRef {
  clear: () => void;
  update: (range: Date | undefined) => void;
}

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>((p, ref) => {
  const { className, buttonClassName, placeholder, ...props } = p;
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(props.selected);

  useEffect(() => {
    if (p.selected !== date) {
      setDate(p.selected);
    }
  }, [p.selected]);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setDate(undefined);
    },
    update: (range: Date | undefined) => {
      setDate(range);
    },
  }));

  const onSelect = (range: Date | undefined) => {
    setDate(range);
    props.onSelectDate?.(range);
  };

  const onConfirm = () => {
    props.onConfirm?.(date);
    setOpen(false);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <div className="flex items-center">
          <PopoverTrigger asChild>
            <Button
              id="date"
              size={props.size}
              variant={"outline"}
              className={cn(
                "w-[260px] justify-start text-left font-normal",
                !date && "text-muted-foreground",
                buttonClassName,
              )}
              disabled={props.disabled}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{date ? formatDate(date) : placeholder || "Pick a date"}</span>
            </Button>
          </PopoverTrigger>
          {props.allowClear && date && (
            <Button
              className="ml-2 size-5 rounded-full"
              variant="secondary"
              size="icon-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setDate(undefined);
                props.onSelectDate?.(undefined);
              }}
            >
              <XIcon className="size-3" />
            </Button>
          )}
        </div>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar mode="single" selected={date} onSelect={onSelect} autoFocus />
          {props.confirm ? (
            <div className="flex justify-end p-2">
              <Button size="xs" className="" onClick={onConfirm}>
                Confirm
              </Button>
            </div>
          ) : null}
        </PopoverContent>
      </Popover>
    </div>
  );
});

const formatDate = (date: Date) => format(date, "MMM d, yyyy");

export default DatePicker;
