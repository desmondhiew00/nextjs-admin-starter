"use client";

import { useEffect, useRef, useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth";
import { useAuthSession } from "@/lib/auth/client";
import { useRouter } from "next-nprogress-bar";

export function UserMenuClient() {
  const router = useRouter();
  const session = useAuthSession();
  const openRef = useRef(false);
  const [open, setOpen] = useState(false);
  const username = session?.user?.fullName;
  const email = session?.user?.email;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!openRef.current) return;

      // [⇧⌘P] - Open profile settings
      if (event.ctrlKey && event.key === "p") {
        setOpen(false);
        openRef.current = false;
        router.push("/account/profile");
      }

      // [⌘S] - Open settings
      if (event.ctrlKey && event.key === "s") {
        setOpen(false);
        openRef.current = false;
        router.push("/settings");
      }

      // [⇧⌘Q] - Log out
      if (event.ctrlKey && event.key === "q") {
        signOut();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <DropdownMenu
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        openRef.current = open;
      }}
    >
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            {/* <AvatarImage src={session.user?.image ?? ""} alt={session.user?.name ?? ""} /> */}
            <AvatarFallback>{username?.[0]}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{username}</p>
            <p className="text-xs leading-none text-muted-foreground">{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push("/account/profile")}>
            Profile
            <DropdownMenuShortcut>^P</DropdownMenuShortcut>
          </DropdownMenuItem>
          {/* <DropdownMenuItem onClick={() => navigate("/settings")}>
            Settings
            <DropdownMenuShortcut>^S</DropdownMenuShortcut>
          </DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut}>
          Log out
          <DropdownMenuShortcut>^Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
