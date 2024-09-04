import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import type { PropsWithChildren } from "react";

interface Props {
  loading: boolean;
  text?: string;
  mode?: "overlay" | "inline";
}
export const Spinner: React.FC<PropsWithChildren<Props>> = ({ loading, children, text, mode = "overlay" }) => {
  if (!loading) return <>{children}</>;
  if (mode === "overlay") {
    return (
      <div className={cn("relative rounded", loading ? "backdrop-blur-sm" : "")}>
        <div className="absolute z-10 flex h-full w-full items-center justify-center bg-background/50">
          <Loader2 className="h-6 w-6 animate-spin" />
          {text ? <span className="ml-2">{text}</span> : null}
        </div>

        {children}
      </div>
    );
  }
  return <Loader2 className="h-6 w-6 animate-spin" />;
};
