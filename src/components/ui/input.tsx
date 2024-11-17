import { omit } from "lodash";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  prefixWidth?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  const { prefixIcon, prefixWidth = 40 } = props;
  const InputComponent = (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-xs placeholder:text-muted-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      style={{ paddingLeft: prefixIcon ? prefixWidth : undefined }}
      {...omit(props, ["prefixIcon", "prefixWidth"])}
    />
  );

  if (props.prefixIcon) {
    return (
      <div className="relative">
        <div
          className="absolute top-1/2 flex justify-center"
          style={{ transform: "translateY(-50%)", width: prefixWidth }}
        >
          {prefixIcon}
        </div>
        {InputComponent}
      </div>
    );
  }
  return InputComponent;
});
Input.displayName = "Input";

export { Input };
