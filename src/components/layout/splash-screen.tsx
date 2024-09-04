"use client";

import { useAppStore } from "@/store/app.store";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const SplashScreen = () => {
  const { navigating, setNavigating } = useAppStore();
  const pathname = usePathname();

  useEffect(() => {
    setNavigating(false);
  }, [pathname]);

  if (!navigating) return null;
  return (
    <motion.div
      className="fixed top-0 left-0 w-screen h-screen glass-bg z-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* <motion.div className="p-5 rounded-lg relative flex justify-center items-center bg-black/5 dark:bg-white/5">
        <motion.div
          animate={{
            rotate: 360,
            transition: {
              duration: 2.8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        >
          <Loader className="h-5 w-5" />
        </motion.div>
      </motion.div> */}
    </motion.div>
  );
};
