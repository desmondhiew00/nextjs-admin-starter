import type { PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const InfoContainer: React.FC<PropsWithChildren<Props>> = ({ children, className }) => {
  return <div className={cn(className)}>{children}</div>;
};

export default InfoContainer;
