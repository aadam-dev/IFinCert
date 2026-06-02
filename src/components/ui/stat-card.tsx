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
          ? "bg-ink-800 border-ink-700 text-white"
          : "bg-white border-sand-200",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn("text-sm font-medium", accent ? "text-ink-300" : "text-ink-500")}>
          {label}
        </span>
        {icon && (
          <span
            className={cn(
              "flex items-center justify-center w-9 h-9 rounded-xl",
              accent ? "bg-ink-700 text-amber-400" : "bg-amber-100 text-amber-500"
            )}
          >
            {icon}
          </span>
        )}
      </div>
      <div>
        <p className={cn("text-2xl font-bold leading-none", accent ? "text-white" : "text-ink-900")}>
          {value}
        </p>
        {subtext && (
          <p className={cn("text-xs mt-1", accent ? "text-ink-400" : "text-ink-400")}>
            {subtext}
          </p>
        )}
      </div>
      {trend && (
        <p className={cn("text-xs font-medium", trend.positive ? "text-sage-600" : "text-rose-600")}>
          {trend.positive ? "↑" : "↓"} {trend.value}
        </p>
      )}
    </div>
  );
}
