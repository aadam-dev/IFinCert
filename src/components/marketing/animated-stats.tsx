"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface StatItem {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
  prefix?: string;
}

function parseStatValue(value: string): { prefix: string; numeric: number | null; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9.]+)(.*)$/);
  if (!match) return { prefix: "", numeric: null, suffix: value };
  return { prefix: match[1], numeric: parseFloat(match[2]), suffix: match[3] };
}

function AnimatedNumber({
  target,
  prefix,
  suffix,
  active,
}: {
  target: number;
  prefix: string;
  suffix: string;
  active: boolean;
}) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  const display = Number.isInteger(target)
    ? Math.round(current).toString()
    : current.toFixed(1);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export function AnimatedStats({ stats }: { stats: StatItem[] }) {
  const ref = React.useRef<HTMLDListElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <dl ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((stat, i) => {
        const parsed = stat.numeric != null
          ? { prefix: stat.prefix ?? "", numeric: stat.numeric, suffix: stat.suffix ?? "" }
          : parseStatValue(stat.value);

        return (
          <div
            key={stat.label}
            className={cn("flex flex-col reveal", `reveal-delay-${Math.min(i + 1, 3)}`)}
          >
            <dt className="text-sm text-ink-500">{stat.label}</dt>
            <dd className="mt-1 text-2xl sm:text-3xl font-bold font-display stat-gold break-words">
              {parsed.numeric != null ? (
                <AnimatedNumber
                  target={parsed.numeric}
                  prefix={parsed.prefix}
                  suffix={parsed.suffix}
                  active={visible}
                />
              ) : (
                stat.value
              )}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
