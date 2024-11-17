"use client";

import { ChevronRightIcon, type LucideIcon } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Dispatch, type SetStateAction, memo, useState } from "react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export interface NavigationMenuItem {
  className?: string;
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  lucideIcon?: LucideIcon;
  href?: Route;
  disabled?: boolean;
  divider?: boolean;
  onClick?: () => void;
  items?: NavigationMenuItem[];
}

interface NavigationMenuProps {
  items: NavigationMenuItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, setOpen }) => {
  const path = usePathname();

  const handleLinkClick = (item: NavigationMenuItem) => () => {
    item.onClick?.();
    setOpen?.(false);
  };

  if (!items.length) return null;
  return (
    <nav className="grid items-start gap-2">
      {items.map((item, index) => {
        const key = item.href || `nav-${index}`;
        if (item.divider) return <hr key={key} className="my-2" />;
        return <NavigationItem key={key} item={item} path={path} onClick={handleLinkClick(item)} />;
      })}
    </nav>
  );
};

interface NavigationItemProps {
  item: NavigationMenuItem;
  path: string;
  onClick?: () => void;
}
const NavigationItem = ({ item, path, onClick }: NavigationItemProps) => {
  const { href, title: Title } = item;
  const active = isLinkActive(path, href);
  const [open, setOpen] = useState(active);

  if (item.items && item.items.length > 0) {
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="group w-full">
          <NavLink
            {...item}
            path={path}
            type="span"
            title={
              <div className="flex w-full flex-1 items-center justify-between">
                {Title ? typeof Title === "string" ? <span>{Title}</span> : Title : null}
                <ChevronRightIcon className="size-4 transform text-muted-foreground transition-all duration-300 group-data-[state=open]:rotate-90" />
              </div>
            }
          />
        </CollapsibleTrigger>
        <CollapsibleContent className="collapsible-content">
          <div className="ml-[18px] mt-2 border-l">
            <div className="ml-2 flex flex-col gap-y-2">
              {item.items.map((subItem, index) => {
                const key = subItem.href || `nav-${index}`;
                return <NavigationItem key={key} item={subItem} path={path} onClick={onClick} />;
              })}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return <NavLink {...item} path={path} />;
};

const NavLink = memo((props: NavigationMenuItem & { path: string; type?: "link" | "span" }) => {
  const { path, type, href, disabled, onClick, className } = props;
  const { title: Title, icon: Icon, lucideIcon: LucideIcon } = props;
  const active = isLinkActive(path, href);

  // prettier-ignore
  const baseCss =
    "group flex w-full cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground";
  const activeCss = active ? "bg-accent" : "transparent";

  const LinkItem = (
    <span
      className={cn(baseCss, activeCss, disabled ? "cursor-not-allowed opacity-50" : "", className)}
      onKeyDown={!href ? onClick : undefined}
    >
      {LucideIcon ? <LucideIcon className="mr-2 h-4 w-4" /> : Icon ? Icon : null}
      {typeof Title === "string" ? <span>{Title}</span> : Title ? Title : null}
    </span>
  );

  if (!href || disabled || type === "span") return LinkItem;
  return (
    <Link href={href} onClick={onClick}>
      {LinkItem}
    </Link>
  );
});
NavLink.displayName = "NavItem";

const isLinkActive = (path: string, href?: string) => {
  if (!href) return false;
  let active = path === href;

  const parts = path.split("/");
  const hrefParts = href.split("/");

  let matchCount = 0;
  for (let i = 1; i < parts.length; i++) {
    if (parts[i] === hrefParts[i]) {
      matchCount++;
    }
  }

  active = matchCount === hrefParts.length - 1;
  return active;
};
