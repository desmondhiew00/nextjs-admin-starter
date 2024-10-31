"use client";

import { cn } from "@/lib/utils";

import { NavigationMenu } from "../../common/navigation-menu";
import { sidebarItems } from "./sidebar-items";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const Sidebar = ({ className, style }: Props) => {
  return (
    <aside className={cn("sidebar border-r overflow-auto", className)} style={style}>
      <div className="space-y-4 p-3">
        <NavigationMenu items={sidebarItems} />
      </div>
    </aside>
  );
};

export default Sidebar;
