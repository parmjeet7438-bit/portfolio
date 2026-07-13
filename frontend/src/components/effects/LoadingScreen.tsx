"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "@/lib/motion";
import { Logo } from "@/components/shared/Logo";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const done = window.setTimeout(() => setVisible(false), 280);
    return () => window.clearTimeout(done);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <div className="mb-4 rounded-2xl border border-sky-500/25 bg-sky-500/10 p-3">
            <Logo className="h-9 w-9" />
          </div>
          <div className="h-1 w-28 overflow-hidden rounded-full bg-sky-500/15">
            <motion.div
              className="h-full rounded-full bg-sky-400"
              initial={{ width: "12%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
