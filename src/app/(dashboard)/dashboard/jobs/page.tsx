import type { Metadata } from "next";
import { ExternalLink, Download, Briefcase } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobOpenings } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Job Placement — IFinCert" };

const institutionAccents: Record<string, { bg: string; color: string }> = {
  "JAIZ Bank":  { bg: "rgba(16,185,129,0.12)",  color: "#10b981" },
  "Lotus Bank": { bg: "rgba(6,182,212,0.12)",   color: "#06b6d4" },
  "IFNG":       { bg: "rgba(148,163,184,0.12)", color: "#94a3b8" },
  "IsBD":       { bg: "rgba(6,182,212,0.12)",   color: "#06b6d4" },
  "TAJ Bank":   { bg: "rgba(16,185,129,0.12)",  color: "#10b981" },
  "AAOIFI":     { bg: "rgba(226,232,240,0.08)", color: "#e2e8f0" },
  "Halvest":    { bg: "rgba(6,182,212,0.12)",   color: "#06b6d4" },
  "STEC":       { bg: "rgba(148,163,184,0.12)", color: "#94a3b8" },
};

export default function JobsPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Job Placement" />

      {/* Scoped hover styles */}
      <style>{`
        .job-card {
          background: rgba(15,23,42,0.6);
          border: 1px solid rgba(100,116,139,0.15);
          transition: border-color 0.2s, background 0.2s;
        }
        .job-card:hover {
          border-color: rgba(16,185,129,0.3);
          background: rgba(16,185,129,0.04);
        }
        .support-btn {
          border: 1px solid rgba(100,116,139,0.2);
          color: #94a3b8;
          background: transparent;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .support-btn:hover {
          border-color: rgba(16,185,129,0.4);
          color: #10b981;
          background: rgba(16,185,129,0.06);
        }
      `}</style>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold" style={{ color: "#e2e8f0" }}>
              Partner Institution Openings
            </h2>
            <p className="text-sm mt-1" style={{ color: "#64748b" }}>
              Current openings at Islamic financial institutions. Apply directly.
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" /> Download Brochure
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobOpenings.map((job) => {
            const accent = institutionAccents[job.institution] ?? { bg: "rgba(100,116,139,0.12)", color: "#64748b" };
            return (
              <div
                key={`${job.institution}-${job.role}`}
                className="job-card rounded-2xl p-5 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: accent.bg, border: `1px solid ${accent.color}33` }}
                  >
                    <Briefcase className="h-5 w-5" style={{ color: accent.color }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#e2e8f0" }}>{job.role}</p>
                    <span
                      className="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                      style={{ background: accent.bg, color: accent.color }}
                    >
                      {job.institution}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={job.applyUrl} target="_blank" rel="noopener noreferrer">
                    Apply <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm" style={{ color: "#475569" }}>
            To explore more openings,{" "}
            <a href="#" className="font-medium transition-opacity hover:opacity-80" style={{ color: "#10b981" }}>
              view here
            </a>
          </p>
        </div>

        {/* Sponsorship section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Sponsorship &amp; Support</CardTitle>
              <Badge variant="sage">Open</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#64748b" }}>
              IFinCert welcomes donations, collaborations, and sponsorships from organisations that
              want to contribute to Islamic finance human capital development in Nigeria.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {["Donation", "Collaboration", "Sponsorship"].map((type) => (
                <button
                  key={type}
                  className="support-btn py-3 rounded-xl text-sm font-semibold"
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                className="rounded-xl p-4 text-xs space-y-1.5"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(100,116,139,0.15)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "#94a3b8" }}>Transfer by bank</p>
                <p className="font-mono font-semibold text-sm" style={{ color: "#e2e8f0" }}>900011109</p>
                <p className="font-semibold" style={{ color: "#cbd5e1" }}>FINACCESS SUPPORT</p>
              </div>
              <div
                className="rounded-xl p-4 text-xs space-y-1.5"
                style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(100,116,139,0.15)" }}
              >
                <p className="font-semibold mb-2" style={{ color: "#94a3b8" }}>Transfer by wallet</p>
                <p className="font-mono font-semibold text-sm" style={{ color: "#e2e8f0" }}>33211BG112</p>
                <p style={{ color: "#475569" }}>Pay from Savings available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
