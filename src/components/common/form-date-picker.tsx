"use client";

import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import DatePicker from "./date-picker";

interface FormDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  name: TName;
  label?: string;
  description?: string;
  disabled?: boolean;
  required?: boolean;
  allowClear?: boolean;
}
export const FormDatePicker = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormDatePickerProps<TFieldValues, TName>,
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
              <DatePicker
                disabled={props.disabled}
                selected={field.value}
                onSelectDate={field.onChange}
                allowClear={props.allowClear}
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

export default FormDatePicker;
