import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import type { Route } from "next";
import { type ButtonSizes, type ButtonVariants, buttonVariants } from "./button";

interface LinkButtonProps<T extends string> {
  className?: string;
  href: Route<T>;
  icon?: LucideIcon | null;
  label: string;
  variant?: ButtonVariants;
  size?: ButtonSizes;
}
export function LinkButton<T extends string>(props: LinkButtonProps<T>) {
  const Icon = props.icon;
  return (
    <Link
      href={props.href}
      className={cn(buttonVariants({ variant: props.variant || "default", size: props.size }), props.className)}
    >
      {Icon ? <Icon className="mr-2 h-4 w-4" /> : null} {props.label}
    </Link>
  );
}
