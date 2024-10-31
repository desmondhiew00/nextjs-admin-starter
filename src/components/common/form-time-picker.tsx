"use client";

import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form";

import { TimePicker, type TimePickerProps } from "./time-picker";

interface FormTimePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
}
export const FormTimePickerInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormTimePickerProps<TFieldValues, TName> & Omit<InputProps, "onChange">,
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
              <div>
                <Input
                  mode={props.mode}
                  disabled={props.disabled}
                  value={field.value}
                  allowClear={props.allowClear}
                  onChange={field.onChange}
                  showSeconds={props.showSeconds}
                />
              </div>
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

interface InputProps {
  value?: Date;
  disabled?: boolean;
  mode?: TimePickerProps["mode"];
  allowClear?: TimePickerProps["allowClear"];
  showSeconds?: TimePickerProps["showSeconds"];
  onChange: (date: Date | undefined) => void;
}
const Input = (props: InputProps) => {
  const { formItemId } = useFormField();
  return (
    <TimePicker
      formId={formItemId}
      mode={props.mode}
      disabled={props.disabled}
      date={props.value}
      allowClear={props.allowClear}
      setDate={props.onChange}
      showSeconds={props.showSeconds}
    />
  );
};

export default FormTimePickerInput;
