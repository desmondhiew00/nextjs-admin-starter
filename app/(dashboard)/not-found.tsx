"use client";

import { useRouter } from "next-nprogress-bar";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="text-[8rem] font-extrabold leading-none">404</span>
      <h2 className="font-heading my-2 text-2xl font-bold">Something&apos;s missing</h2>
      <p className="text-muted-foreground">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => router.back()} variant="default">
          Go back
        </Button>
        <Button onClick={() => router.push("/")} variant="ghost">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
