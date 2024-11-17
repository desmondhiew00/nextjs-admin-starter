"use client";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import { NavigationMenu } from "@/components/common/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { AppName } from "@/configs/app.config";
import { sidebarItems } from "./sidebar-items";

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="cursor-pointer">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="px-3 py-2">
            <h2 className="mb-5 px-4 text-lg font-semibold tracking-tight">{AppName} Dashboard</h2>
            <div className="space-y-1">
              <NavigationMenu items={sidebarItems} setOpen={setOpen} />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileSidebar;
