import * as React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  icon?: React.ReactNode;
  trend?: { value: string; positive: boolean };
  accent?: boolean;
  className?: string;
}

export function StatCard({ label, value, subtext, icon, trend, accent, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-5 flex flex-col gap-3",
        accent
          ? "bg-ink-50 border-ink-200"
          : "bg-white border-sand-200",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("text-sm font-medium", accent ? "text-ink-600" : "text-ink-500")}>
          {label}
        </span>
        {icon && (
          <span
            className={cn(
              "flex items-center justify-center w-9 h-9 rounded-xl",
              accent ? "bg-ink-100 text-ink-600" : "bg-ink-50 text-ink-600"
            )}
          >
            {icon}
          </span>
        )}
      </div>
      <div>
        <p className={cn("text-2xl font-bold leading-none", accent ? "text-ink-900" : "text-ink-900")}>
          {value}
        </p>
        {subtext && (
          <p className="text-xs mt-1 text-ink-400">{subtext}</p>
        )}
      </div>
      {trend && (
        <p className={cn("text-xs font-medium", trend.positive ? "text-amber-600" : "text-rose-600")}>
          {trend.positive ? "↑" : "↓"} {trend.value}
        </p>
      )}
    </div>
  );
}
