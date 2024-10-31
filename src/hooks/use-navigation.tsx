import { useAppStore } from "@/store/app.store";
import type { Route } from "next";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useTransition } from "react";

export const useNavigator = () => {
  const { setNavigating } = useAppStore();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!isPending) {
      setNavigating(false);
    }
  }, [isPending]);

  return {
    router,
    refreshPage: () => {
      setNavigating(true);
      startTransition(() => {
        router.refresh();
      });
    },
    navigate: <T extends string>(url: Route<T>, options?: { scroll?: boolean }) => {
      setNavigating(true);
      startTransition(() => {
        router.push(url, options);
      });
    },
  };
};
