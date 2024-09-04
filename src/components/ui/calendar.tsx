"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SelectComponent } from "./select";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const montsLib: Record<"en", Record<number, string>> = {
  en: {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  },
};

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day: cn(buttonVariants({ variant: "ghost" }), "h-8 w-8 p-0 font-normal aria-selected:opacity-100"),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
        IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

function CalendarComponent({ ...props }: CalendarProps) {
  const [date, setDate] = React.useState<Date>((props.selected as unknown as Date) || new Date());

  return (
    <Calendar
      className="select-none"
      {...props}
      month={date}
      disableNavigation
      components={{
        Caption: () => {
          return (
            <div className="flex space-x-2 select-none">
              <SelectComponent
                items={[...(new Array(12) as number[])].map((_, index) => ({
                  label: montsLib.en[index + 1],
                  value: (index + 1).toString(),
                }))}
                value={(new Date(date).getMonth() + 1).toString()}
                onValueChange={(value) => {
                  setDate(new Date(date.setMonth(Number.parseInt(value) - 1)));
                }}
              />
              <SelectComponent
                items={[...(new Array(new Date().getFullYear() + 10) as number[])]
                  .map((_, index) => ({
                    label: (index + 1).toString(),
                    value: (index + 1).toString(),
                  }))
                  .slice(1900, new Date().getFullYear() + 10)
                  .reverse()}
                value={new Date(date).getFullYear().toString()}
                onValueChange={(value) => {
                  setDate(new Date(date.setFullYear(Number.parseInt(value))));
                }}
              />
            </div>
          );
        },
      }}
    />
  );
}

export { Calendar, CalendarComponent };
