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

import FileInput, { type FileUploadInputProps } from "../ui/file-input";

interface FormFileInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  name: TName;
  label?: string;
  description?: string;
  config?: FileUploadInputProps;
  required?: boolean;
}
export const FormFileInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormFileInputProps<TFieldValues, TName>,
) => {
  const { label, name, description, control, required } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel required={required}>{label}</FormLabel>
            <FormControl>
              <Input config={props.config} onChange={field.onChange} disabled={props.disabled} />
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
  config?: FileUploadInputProps;
  disabled?: boolean;
  onChange?: (file?: File | File[]) => void;
}
const Input = (props: InputProps) => {
  const { formItemId } = useFormField();
  return (
    <FileInput {...props.config} inputProps={{ id: formItemId }} onChange={props.onChange} disabled={props.disabled} />
  );
};

export default FormFileInput;
