import { cn } from "@/lib/utils";
import { format } from "date-fns";

const dateFormat = "dd MMM yyyy";
const timeFormat = "h:mm aa";

interface Props {
  className?: string;
  dateClassName?: string;
  timeClassName?: string;
  value?: Date | string;
}

export const DateTimeLabel = ({ value, className, dateClassName, timeClassName }: Props) => {
  if (!value) return null;

  const dateLabel = format(new Date(value), dateFormat);
  const timeLabel = format(new Date(value), timeFormat);
  return (
    <div className={cn("flex flex-col", className)}>
      <span className={cn("", dateClassName)}>{dateLabel}</span>
      <span className={cn("text-xs text-muted-foreground", timeClassName)}>{timeLabel}</span>
    </div>
  );
};
