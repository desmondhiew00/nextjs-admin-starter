import z from "zod";

/* ----------------------------- Error Messages ----------------------------- */
export const msgTemplate = {
  required: (name: string) => `${name} is required`,
  minChar: (name: string, length: number) => `${name} must be at least ${length} characters`,
  maxChar: (name: string, length: number) => `${name} must be at most ${length} characters`,
  min: (name: string, length: number) => `${name} must be at least ${length}`,
  max: (name: string, length: number) => `${name} must be at most ${length}`,
  invalid: (name: string) => `Invalid ${name}`,
  invalidType: (name: string, type = "value") => `Invalid ${name} type. Expected ${type}`,
  password: (length: number) => `Password must be at least ${length} characters`,
  email: "Enter a valid email address",
  file: (name?: string) => `Please select a ${name ? name : "file"}`,
};

/* -------------------------------- Validator ------------------------------- */

type StringOptions = { required: boolean };
type NumOptions = { min?: number; max?: number };

export const validator = {
  number: (label: string, opt?: NumOptions) => {
    const { min = 0, max = Number.POSITIVE_INFINITY } = opt || {};
    return z
      .number({
        required_error: msgTemplate.required(label),
        invalid_type_error: msgTemplate.invalidType(label, "number"),
      })
      .min(min, { message: msgTemplate.min(label, min) })
      .max(max, { message: msgTemplate.max(label, max) });
  },
  string: (label: string, opt?: StringOptions) => {
    const { required = true } = opt || {};
    const str = z
      .string({
        required_error: msgTemplate.required(label),
        invalid_type_error: msgTemplate.invalidType(label, "string"),
      })
      .trim();

    if (required) return str.min(1, { message: msgTemplate.required(label) });
    return str;
  },
  boolean: (label: string) => {
    return z.boolean({ required_error: msgTemplate.required(label) });
  },
  email: (label: string, opt?: StringOptions) => {
    return validator.string(label, opt).email({ message: msgTemplate.email });
  },
  password: (label = "Password", min = 8) => {
    return z
      .string({ required_error: msgTemplate.required(label) })
      .trim()
      .min(min, { message: msgTemplate.password(min) });
  },
  url: (label: string) => {
    return z
      .string({ required_error: msgTemplate.required(label) })
      .trim()
      .url();
  },
  date: (label: string) => {
    return z.date({ required_error: msgTemplate.required(label) });
  },
  file: (label: string, options: { nullable?: boolean; maxSize?: number } = {}) => {
    const { nullable = false, maxSize = 0 } = options || {};
    const v = z.instanceof(File, { message: msgTemplate.file(label) });
    if (nullable) v.nullable();
    if (maxSize > 9)
      v.refine((file) => file.size <= maxSize * 1024 * 1024, { message: `${label} must be at most ${maxSize}MB` });
    return v;
  },
};

export default validator;
