import { format as fnsFormat, isValid, parse } from "date-fns";

const dateFormat = "dd MMM yyyy";
const dateTimeFormat = "d MMM yyyy h:mm aa";

export const parseDateTime = (date: string | Date) => {
  return fnsFormat(new Date(date), dateTimeFormat);
};

export const parseDate = (date: string | Date, format = dateFormat) => {
  return fnsFormat(date instanceof Date ? date : new Date(date), format);
};

export const parseTimeString = (time: string | Date) => {
  return fnsFormat(time instanceof Date ? time : new Date(time), "h:mm aa");
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * Parse date to database date time format
 * @param date Date | string
 * @param stringFormat date format of the string
 * @returns Date | null
 */
export const toDbDateTime = (date: Date | string, stringFormat = "yyyy-MM-dd"): string | null => {
  if (!date || !isValid(date)) return null;
  if (typeof date === "string") {
    const parsed = parse(date, stringFormat, new Date());
    if (isValid(parsed)) {
      return fnsFormat(parsed, "yyyy-MM-dd HH:mm:ss");
    }
    return null;
  }
  return fnsFormat(date, "yyyy-MM-dd HH:mm:ss");
};
