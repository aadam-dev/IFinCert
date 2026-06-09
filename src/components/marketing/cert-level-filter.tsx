"use client";

import * as React from "react";
import { CertTiltCard } from "@/components/marketing/cert-tilt-card";
import { cn } from "@/lib/utils";
import type { Certification } from "@/types";

const tabs = [
  { id: "all", label: "All" },
  { id: "foundation", label: "Foundation" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
  { id: "professional", label: "Professional" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const levelOrder = { foundation: 0, intermediate: 1, advanced: 2, professional: 3 };

export function CertLevelFilter({ certifications }: { certifications: Certification[] }) {
  const [active, setActive] = React.useState<TabId>("all");

  const sorted = [...certifications].sort(
    (a, b) => levelOrder[a.level] - levelOrder[b.level]
  );

  const filtered =
    active === "all" ? sorted : sorted.filter((c) => c.level === active);

  return (
    <div>
      <div className="tab-scroll mb-8 border-b border-sand-200 pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative shrink-0 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors rounded-t-lg min-h-[44px]",
              active === tab.id
                ? "text-ink-600"
                : "text-ink-500 hover:text-ink-800"
            )}
          >
            {tab.label}
            {active === tab.id && (
              <span
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-amber-400 rounded-full"
                aria-hidden
              />
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {filtered.map((cert) => (
          <CertTiltCard key={cert.code} cert={cert} />
        ))}
      </div>
    </div>
  );
}
