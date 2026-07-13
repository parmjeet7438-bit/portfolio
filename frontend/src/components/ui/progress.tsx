"use client";

import * as Progress from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <Progress.Root
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-sky-500/10", className)}
      value={value}
    >
      <Progress.Indicator
        className="h-full rounded-full bg-gradient-to-r from-sky-600 to-sky-400 transition-all duration-700 ease-out shadow-[0_0_12px_rgba(56,189,248,0.4)]"
        style={{ width: `${value}%` }}
      />
    </Progress.Root>
  );
}
