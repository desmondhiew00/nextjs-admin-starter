"use client";

import LogoSvg from "@/assets/logo.svg";
import { LinkButton } from "@/components/ui/link-button";
import { AppName } from "@/configs/app.config";
import { usePathname } from "next/navigation";

const AuthPageHeader = () => {
  const pathname = usePathname();

  const link = {
    href: pathname === "/login" ? "/forgot-password" : "/login",
    label: pathname === "/login" ? "Forgot Password" : "Sign In",
  };

  return (
    <>
      <div className="absolute left-0 top-0 m-5 flex items-center gap-2 z-10">
        <LogoSvg className="w-[32px] h-[32px]" />
        <h1 className="font-semibold">{AppName}</h1>
      </div>
      <div className="absolute right-0 top-0 m-5 z-10">
        <LinkButton icon={null} href={link.href} label={link.label} variant="ghost" />
      </div>
    </>
  );
};

export default AuthPageHeader;
