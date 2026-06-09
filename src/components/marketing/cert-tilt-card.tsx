"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatNaira } from "@/lib/utils";
import type { Certification } from "@/types";

const levelStyles: Record<string, string> = {
  foundation: "bg-ink-100 text-ink-700 border-ink-200",
  intermediate: "bg-ink-50 text-ink-600 border-ink-200",
  advanced: "bg-amber-50 text-amber-700 border-amber-200",
  professional: "bg-ink-900 text-amber-300 border-ink-800",
};

export function CertTiltCard({ cert }: { cert: Certification }) {
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="surface-card card-lift p-7 flex flex-col transition-transform duration-200 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-bold text-ink-600 bg-ink-50 border border-ink-200 px-3 py-1.5 rounded-xl">
            {cert.code}
          </span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize border ${levelStyles[cert.level]}`}>
            {cert.level}
          </span>
        </div>
        <span className="text-xs text-ink-500 shrink-0">{cert.body}</span>
      </div>
      <h3 className="text-base font-semibold text-ink-950 mb-2 leading-snug">{cert.name}</h3>
      <p className="text-sm text-ink-600 leading-relaxed flex-1 mb-6">{cert.description}</p>
      <div className="flex items-center justify-between pt-4 border-t border-sand-200">
        <div>
          <p className="text-xs text-ink-500">Estimated cost</p>
          <p className="text-sm font-semibold text-ink-950 mt-0.5">{formatNaira(cert.costNGN)}</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/register">
            Save toward this <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
