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

import ImageInput, { type ImageUploadInput } from "../ui/image-input";

interface FormImageInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Partial<ControllerProps<TFieldValues, TName>> {
  name: TName;
  label?: string;
  description?: string;
  disabled?: boolean;
  config?: ImageUploadInput;
  required?: boolean;
}
export const FormImageInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: FormImageInputProps<TFieldValues, TName>,
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
              <Input config={props.config} disabled={props.disabled} onChange={field.onChange} />
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
  config?: ImageUploadInput;
  disabled?: boolean;
  onChange?: (file?: File | File[]) => void;
}
const Input = (props: InputProps) => {
  const { formItemId } = useFormField();
  return (
    <ImageInput {...props.config} inputProps={{ id: formItemId }} disabled={props.disabled} onChange={props.onChange} />
  );
};

export default FormImageInput;
