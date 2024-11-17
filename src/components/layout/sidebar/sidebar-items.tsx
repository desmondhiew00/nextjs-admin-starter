import type { NavigationMenuItem } from "@/components/common/navigation-menu";
import { BarcodeIcon, LayoutDashboard, NotepadText, SettingsIcon, UserRoundIcon } from "lucide-react";

export const sidebarItems: NavigationMenuItem[] = [
  { title: "Dashboard", lucideIcon: LayoutDashboard, href: "/dashboard" },
  { title: "User", lucideIcon: UserRoundIcon, href: "/users" },
  { title: "Product", href: "/products", lucideIcon: BarcodeIcon, disabled: true },
  { title: "Order", href: "/orders", lucideIcon: NotepadText, disabled: true },
  { divider: true },
  {
    title: "Settings",
    href: "/settings",
    lucideIcon: SettingsIcon,
    disabled: true,
  },
];
