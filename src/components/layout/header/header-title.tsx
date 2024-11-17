"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

import LogoSvg from "@/assets/logo.svg";
import { AppName, primaryColor } from "@/configs/app.config";

export function HeaderTitle() {
  const { theme } = useTheme();
  const iconColor = theme === "dark" ? primaryColor : "#fff";

  return (
    <Link className="flex items-center gap-2" href="/dashboard">
      <LogoSvg height={28} width={28} color={iconColor} />
      <h3 className="font-semibold">{AppName}</h3>
    </Link>
  );
}
