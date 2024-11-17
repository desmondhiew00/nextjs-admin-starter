import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

export const Info: React.FC<
  PropsWithChildren<{
    className?: string;
    label: string;
    labelClassName?: string;
  }>
> = ({ className, label, children, labelClassName }) => {
  return (
    <div className={cn("font-medium text-base", className)}>
      <div className={cn("text-sm text-muted-foreground font-normal mb-1", labelClassName)}>{label}</div>
      {children}
    </div>
  );
};
