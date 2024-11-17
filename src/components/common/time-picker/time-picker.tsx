"use client";

import { Clock } from "lucide-react";
import * as React from "react";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { TimePeriodSelect } from "./period-select";
import { TimeInput } from "./time-input";
import type { Period } from "./time-picker-utils";

export interface TimePickerProps {
  className?: string;
  formId?: string;
  mode?: "12hour" | "24hour";
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  disabled?: boolean;
  allowClear?: boolean;
  showSeconds?: boolean;
}

export function TimePicker({ date, setDate, mode = "12hour", showSeconds, formId = "", ...props }: TimePickerProps) {
  const is12Hour = mode === "12hour";
  const [period, setPeriod] = React.useState<Period>(GetPeriod());
  const minuteRef = React.useRef<HTMLInputElement>(null);
  const hourRef = React.useRef<HTMLInputElement>(null);
  const secondRef = React.useRef<HTMLInputElement>(null);
  const periodRef = React.useRef<HTMLButtonElement>(null);

  function GetPeriod(): Period {
    if (date !== undefined) {
      if (date?.getHours() >= 12) {
        return "PM";
      }
      return "AM";
    }
    return "AM";
  }

  return (
    <div className={cn("flex items-end gap-2", props.className)}>
      <div className="grid gap-1 text-center">
        <Label htmlFor={`${formId}hours`} className="text-xs">
          Hours
        </Label>
        <TimeInput
          id={`${formId}hours`}
          picker={is12Hour ? "12hours" : "hours"}
          period={period}
          date={date}
          setDate={setDate}
          setPeriod={setPeriod}
          ref={hourRef}
          disabled={props.disabled}
          onRightFocus={() => minuteRef.current?.focus()}
        />
      </div>
      <div className="grid gap-1 text-center">
        <Label htmlFor={`${formId}minutes`} className="text-xs">
          Minutes
        </Label>
        <TimeInput
          id={`${formId}minutes`}
          picker="minutes"
          date={date}
          setDate={setDate}
          ref={minuteRef}
          onLeftFocus={() => hourRef.current?.focus()}
          onRightFocus={() => {
            if (!showSeconds) return;
            secondRef.current?.focus();
          }}
          disabled={props.disabled}
        />
      </div>
      {showSeconds && (
        <div className="grid gap-1 text-center">
          <Label htmlFor={`${formId}seconds`} className="text-xs">
            Seconds
          </Label>
          <TimeInput
            id={`${formId}seconds`}
            picker="seconds"
            date={date}
            setDate={setDate}
            ref={secondRef}
            onLeftFocus={() => minuteRef.current?.focus()}
            disabled={props.disabled}
          />
        </div>
      )}

      {is12Hour ? (
        <div className="grid gap-1 text-center">
          <Label className="text-xs">Period</Label>
          <TimePeriodSelect
            period={period}
            setPeriod={setPeriod}
            date={date}
            setDate={setDate}
            ref={periodRef}
            onLeftFocus={() => secondRef.current?.focus()}
          />
        </div>
      ) : (
        <div className="flex h-10 items-center">
          <Clock className="ml-2 h-4 w-4" />
        </div>
      )}
    </div>
  );
}
