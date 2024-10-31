import type * as React from "react";
import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input, type InputProps } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormTextInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  className?: string;
  name: TName;
  label?: string;
  type?: "text" | "email" | "password" | "textarea" | "number";
  placeholder?: string;
  description?: string;
  disabled?: boolean;
  prefixIcon?: InputProps["prefixIcon"];
  required?: boolean;
  step?: string;
}
export const FormTextInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormTextInputProps<TFieldValues, TName>,
) => {
  const { label, name, description, placeholder, control, type = "text" } = props;
  const inputExtraProps: React.InputHTMLAttributes<HTMLInputElement> = {};

  if (type === "email") {
    inputExtraProps.autoCapitalize = "none";
    inputExtraProps.autoComplete = "email";
    inputExtraProps.autoCorrect = "off";
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel required={props.required}>{label}</FormLabel>
          <FormControl>
            {type === "textarea" ? (
              <Textarea
                placeholder={placeholder}
                {...field}
                autoComplete="off"
                value={field.value || ""}
                disabled={props.disabled}
                className={props.className}
                onChange={(e) => {
                  if (!e.target.value) {
                    field.onChange(undefined);
                  } else {
                    field.onChange(e.target.value);
                  }
                }}
              />
            ) : (
              <Input
                className={props.className}
                type={type}
                placeholder={placeholder}
                {...inputExtraProps}
                {...field}
                step={props.step}
                disabled={props.disabled}
                prefixIcon={props.prefixIcon}
                autoComplete="name"
                onChange={(e) => {
                  if (type === "number") {
                    field.onChange(Number.parseFloat(e.target.value));
                  } else {
                    field.onChange(e.target.value);
                  }
                }}
              />
            )}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTextInput;
