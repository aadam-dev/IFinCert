import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Certifications" };

const levelOrder = { foundation: 0, intermediate: 1, advanced: 2, professional: 3 };
const levelColors: Record<string, string> = {
  foundation: "bg-sage-100 text-sage-700",
  intermediate: "bg-amber-100 text-amber-600",
  advanced: "bg-ink-100 text-ink-700",
  professional: "bg-ink-800 text-white",
};

export default function CertificationsPage() {
  const sorted = [...certifications].sort(
    (a, b) => levelOrder[a.level] - levelOrder[b.level]
  );

  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="amber" className="mb-4">AAOIFI · CISI · INCEIF · CIFE</Badge>
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Islamic Finance Certifications
          </h1>
          <p className="text-ink-300 text-lg max-w-2xl leading-relaxed">
            Eight internationally accredited credentials — from foundational knowledge to chartered
            professional status. MIFEA makes every one of them financially reachable for Nigerians.
          </p>
        </div>
      </section>

      {/* Cert grid */}
      <section className="py-16 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sorted.map((cert) => (
              <div
                key={cert.code}
                className="bg-white rounded-2xl border border-sand-200 p-7 hover:shadow-md hover:border-amber-200 transition-all duration-200 flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-bold text-amber-500 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl">
                      {cert.code}
                    </span>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${levelColors[cert.level]}`}>
                      {cert.level}
                    </span>
                  </div>
                  <span className="text-xs text-ink-400 shrink-0">{cert.body}</span>
                </div>
                <h3 className="text-base font-semibold text-ink-900 mb-2 leading-snug">{cert.name}</h3>
                <p className="text-sm text-ink-500 leading-relaxed flex-1 mb-6">{cert.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-sand-100">
                  <div>
                    <p className="text-xs text-ink-400">Estimated cost</p>
                    <p className="text-sm font-semibold text-ink-900 mt-0.5">
                      USD {cert.costUSD.toLocaleString()}{" "}
                      <span className="text-ink-400 font-normal">/ ~₦{(cert.costNGN / 1_000_000).toFixed(1)}M</span>
                    </p>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/register">
                      Save toward this <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-ink-800 rounded-2xl p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-white mb-3">
              Not sure which to start with?
            </h2>
            <p className="text-ink-400 mb-6 max-w-lg mx-auto text-sm">
              Create your MIFEA account and get a personalised pathway recommendation based on
              your background and career goals.
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/register">Get started free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
