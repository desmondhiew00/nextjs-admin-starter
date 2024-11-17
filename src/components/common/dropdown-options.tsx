import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface DropdownOptionsProps {
  options: {
    label: string;
    className?: string;
    variant?: "danger" | "success" | "warn" | "info" | "default";
    onClick: () => void;
  }[];
}

const dangerCss = "text-red-500 focus:bg-red-500 focus:text-white";
const successCss = "text-green-500 focus:bg-green-500 focus:text-white";
const warnCss = "text-yellow-500 focus:bg-yellow-500 focus:text-white";
const infoCss = "text-blue-500 focus:bg-blue-500 focus:text-white";

export const DropdownOptions: React.FC<DropdownOptionsProps> = ({ options }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex h-8 w-8 p-0 data-[state=open]:bg-muted">
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {options.map((option) => {
          let colorCss = "";
          if (option.variant === "danger") colorCss = dangerCss;
          if (option.variant === "success") colorCss = successCss;
          if (option.variant === "warn") colorCss = warnCss;
          if (option.variant === "info") colorCss = infoCss;
          return (
            <DropdownMenuItem key={option.label} className={cn(colorCss, option.className)} onClick={option.onClick}>
              {option.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownOptions;
