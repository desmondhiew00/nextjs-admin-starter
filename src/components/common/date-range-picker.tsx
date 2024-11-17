"use client";

import type { VariantProps } from "class-variance-authority";
import { format } from "date-fns";
import { CalendarIcon, XIcon } from "lucide-react";
import { forwardRef, useImperativeHandle, useState } from "react";
import type { DateRange } from "react-day-picker";

import { Button, type buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  buttonClassName?: string;
  onSelectDate?: (range: DateRange | undefined) => void;
  placeholder?: string;
  size?: VariantProps<typeof buttonVariants>["size"];
  defaultValue?: DateRange | undefined;
  confirm?: boolean;
  onConfirm?: (range: DateRange | undefined) => void;
  disabled?: boolean;
  allowClear?: boolean;
}

export interface DateRangePickerRef {
  clear: () => void;
  update: (range: DateRange | undefined) => void;
}

export const DateRangePicker = forwardRef<DateRangePickerRef, Props>((p, ref) => {
  const { className, buttonClassName, placeholder, ...props } = p;
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>(props.defaultValue);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setDate(undefined);
    },
    update: (range: DateRange | undefined) => {
      setDate(range);
    },
  }));

  const onSelect = (range: DateRange | undefined) => {
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
              <span>{parseDateLabel(date?.from, date?.to, placeholder)}</span>
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
          <Calendar mode="range" defaultMonth={date?.from} selected={date} onSelect={onSelect} numberOfMonths={2} />
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

DateRangePicker.displayName = "DateRangePicker";

const formatDate = (date: Date) => format(date, "MMM d, yyyy");

const parseDateLabel = (from: Date | undefined, to: Date | undefined, placeholder?: string) => {
  if (from) {
    if (to) {
      return `${formatDate(from)} - ${formatDate(to)}`;
    }
    return formatDate(from);
  }
  return placeholder || "Pick a date";
};

export default DateRangePicker;
