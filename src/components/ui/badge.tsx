import { type VariantProps, cva } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "",
        primary: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        "primary-outline": "border-primary text-primary",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        success: "text-green-600 bg-green-100 hover:bg-green-200 border-none",
        outline: "text-foreground",
        black:
          "border-transparent bg-black dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80",
        blue: "border-transparent bg-blue-500 text-primary-foreground hover:bg-blue-500/80",
        "blue-outline": "border-blue-500 text-blue-500",
        pink: "border-transparent bg-pink-400 text-white hover:bg-pink-400/80",
        yellow: "border-transparent bg-yellow-400 text-white hover:bg-yellow-400/80",
        red: "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        green: "border-transparent bg-green-500 text-white hover:bg-green-500/80",
        "green-outline": "border-green-500 text-green-500",
        purple: "border-transparent bg-purple-500 text-white hover:bg-purple-500/80",
        indigo: "border-transparent bg-indigo-500 text-white hover:bg-indigo-500/80",
        teal: "border-transparent bg-teal-500 text-white hover:bg-teal-500/80",
        gray: "border-transparent bg-gray-500 text-white hover:bg-gray-500/80",
        orange: "border-transparent bg-orange-500 text-white hover:bg-orange-500/80",
        "orange-outline": "border-orange-500 text-orange-500",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeVariants = VariantProps<typeof badgeVariants>["variant"];

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  if (variant === undefined) {
    if (typeof props.children === "string") {
      if (["success", "complete", "completed", "done"].includes(props.children.toLowerCase())) {
        variant = "success";
      } else if (["error", "fail", "failed"].includes(props.children.toLowerCase())) {
        variant = "destructive";
      }
    }
  }
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
