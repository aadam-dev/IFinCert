"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  label?: string;
  showValue?: boolean;
  colorClass?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, label, showValue, colorClass = "bg-amber-500", ...props }, ref) => (
  <div className="w-full">
    {(label || showValue) && (
      <div className="flex justify-between items-center mb-2">
        {label && <span className="text-sm text-ink-600">{label}</span>}
        {showValue && (
          <span className="text-sm font-semibold text-ink-800">{value ?? 0}%</span>
        )}
      </div>
    )}
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2.5 w-full overflow-hidden rounded-full bg-sand-200",
        className
      )}
      {...props}
      value={value}
    >
      <ProgressPrimitive.Indicator
        className={cn("h-full w-full flex-1 rounded-full transition-all duration-500 ease-out", colorClass)}
        style={{ transform: `translateX(-${100 - (value ?? 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  </div>
));
Progress.displayName = "Progress";

export { Progress };
