import { type ClassValue, clsx } from "clsx";
import { parsePhoneNumber } from "libphonenumber-js";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseErrorMessage = (e: unknown) => {
  if (e instanceof Error) return e.message;
  if (e instanceof String) return e;
  return "An unknown error occurred";
};

export const getFullName = (firstName: string | null | undefined, lastName: string | null | undefined) => {
  let fullName = "";
  if (firstName) fullName += firstName;
  if (lastName) {
    if (fullName) fullName += " ";
    fullName += lastName;
  }
  return fullName;
};

export const formatPhoneNumber = (value: string | null | undefined) => {
  if (!value) return null;

  let phoneVal = value;
  if (phoneVal.charAt(0) !== "+") phoneVal = `+${phoneVal}`;

  const phoneNumber = parsePhoneNumber(phoneVal);
  const valid = phoneNumber.isValid();
  const text = valid ? phoneNumber.formatInternational() : value;
  return text;
};

export const memoizePromise = <T>(fn: () => Promise<T>) => {
  let promise: Promise<T> | null = null;

  return async (): Promise<T> => {
    if (promise) return promise;

    promise = fn().finally(() => {
      promise = null;
    });

    return promise;
  };
};
