"use client";

import { add, format as formatDate } from "date-fns";
import { Calendar as CalendarIcon, XIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { TimePicker, type TimePickerProps } from "./time-picker";

export interface DateTimePickerProps {
  mode?: TimePickerProps["mode"];
  value?: Date;
  disabled?: boolean;
  onChange?: (date: Date | null) => void;
  format?: string;
  showTime?: boolean;
  allowClear?: boolean;
}

export function DateTimePicker(props: DateTimePickerProps) {
  const { showTime = true, allowClear } = props;
  const [date, setDate] = React.useState<Date>();
  let format = showTime ? "PPP HH:mm" : "PPP";
  if (props.format) format = props.format;

  React.useEffect(() => {
    if (props.value) {
      setDate(props.value);
    }
  }, [props.value]);

  /**
   * carry over the current time when a user clicks a new day
   * instead of resetting to 00:00
   */
  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) return;
    if (!date) {
      setDate(newDay);
      props.onChange?.(newDay);
      return;
    }
    const diff = newDay.getTime() - date.getTime();
    const diffInDays = diff / (1000 * 60 * 60 * 24);
    const newDateFull = add(date, { days: Math.ceil(diffInDays) });
    setDate(newDateFull);
    props.onChange?.(newDateFull);
  };

  const handleTimeChanged = (date: Date | undefined) => {
    if (!date) return;
    setDate(date);
    props.onChange?.(date);
  };

  return (
    <Popover>
      <div className="flex items-center">
        <PopoverTrigger asChild disabled={props.disabled}>
          <Button
            variant="outline"
            className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
            disabled={props.disabled}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? formatDate(date, format) : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        {allowClear && date && (
          <Button
            className="ml-2 size-5 rounded-full"
            variant="secondary"
            size="icon-sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setDate(undefined);
              props.onChange?.(null);
            }}
          >
            <XIcon className="size-3" />
          </Button>
        )}
      </div>
      <PopoverContent className="w-auto">
        <CalendarComponent
          className="p-0"
          mode="single"
          selected={date}
          onSelect={(d) => handleSelect(d)}
          initialFocus
          disabled={props.disabled}
        />
        {showTime && (
          <div className="border-t border-border p-3">
            <TimePicker className="justify-center" mode={props.mode} setDate={handleTimeChanged} date={date} />
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
