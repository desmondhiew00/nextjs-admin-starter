import ThemeToggle from "@/components/core/theme-toggle";
import { UserMenu } from "@/components/core/user-menu";
import { cn } from "@/lib/utils";

import { MobileSidebar } from "../sidebar/mobile-sidebar";
import { HeaderTitle } from "./header-title";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function Header({ className, style }: Props) {
  return (
    <header
      className={cn("header z-50 supports-backdrop-blur:bg-background/60 border-b shadow-sm backdrop-blur", className)}
      style={style}
    >
      <nav className="flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <HeaderTitle />
        </div>
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <UserMenu />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

Header.displayName = "Header";

export default Header;
