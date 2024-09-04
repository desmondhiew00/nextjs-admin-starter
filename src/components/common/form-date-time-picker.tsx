"use client";

import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { DateTimePicker, type DateTimePickerProps } from "./time-picker";

interface FormDateTimePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  name: TName;
  label?: string;
  description?: string;
  disabled?: boolean;
  mode?: DateTimePickerProps["mode"];
  format?: DateTimePickerProps["format"];
  showTime?: DateTimePickerProps["showTime"];
  allowClear?: DateTimePickerProps["allowClear"];
  required?: boolean;
}
export const FormDateTimePickerInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormDateTimePickerProps<TFieldValues, TName>,
) => {
  const { label, name, description, control, required } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel type="span" required={required}>
              {label}
            </FormLabel>
            <FormControl>
              <DateTimePicker
                mode={props.mode}
                format={props.format}
                disabled={props.disabled}
                value={field.value}
                showTime={props.showTime}
                allowClear={props.allowClear}
                onChange={field.onChange}
              />
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default FormDateTimePickerInput;
