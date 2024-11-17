import type { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { type ComboBoxProps, Combobox } from "../ui/combo-box";

interface FormSelectInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  name: TName;
  label?: string;
  description?: string;
  disabled?: boolean;
  placeholder?: string;
  searchText?: string;
  width?: number | string;
  options: ComboBoxProps["options"];
  shouldFilter?: ComboBoxProps["shouldFilter"];
  onReachBottom?: ComboBoxProps["onReachBottom"];
  required?: boolean;
}
export const FormSelectInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormSelectInputProps<TFieldValues, TName>,
) => {
  const { label, name, description, control, required } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel type="span" required={required}>
            {label}
          </FormLabel>
          <FormControl>
            <div>
              <Combobox
                disabled={field.disabled || props.disabled}
                value={field.value}
                width={props.width || 300}
                options={props.options}
                placeholder={props.placeholder || "Select"}
                searchText={props.searchText || "Search..."}
                onReachBottom={props.onReachBottom}
                shouldFilter={props.shouldFilter}
                onSelect={field.onChange}
              />
            </div>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSelectInput;
