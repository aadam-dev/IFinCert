import type { Metadata } from "next";
import { ExternalLink, Download, Briefcase } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { jobOpenings } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Job Placement" };

const institutionColors: Record<string, string> = {
  "JAIZ Bank": "bg-sage-100 text-sage-700",
  "Lotus Bank": "bg-amber-100 text-amber-600",
  "IFNG": "bg-ink-100 text-ink-700",
  "IsBD": "bg-amber-100 text-amber-600",
  "TAJ Bank": "bg-sage-100 text-sage-700",
  "AAOIFI": "bg-ink-800 text-white",
  "Halvest": "bg-amber-100 text-amber-600",
  "STEC": "bg-ink-100 text-ink-700",
};

export default function JobsPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Job Placement" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Partner Institution Openings</h2>
            <p className="text-sm text-ink-500 mt-1">
              Current openings at Islamic financial institutions. Apply directly.
            </p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" /> Download Brochure
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobOpenings.map((job) => (
            <div
              key={`${job.institution}-${job.role}`}
              className="bg-white rounded-2xl border border-sand-200 p-5 flex items-center justify-between gap-4 hover:shadow-sm hover:border-amber-200 transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-sand-100 rounded-xl flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-ink-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink-900">{job.role}</p>
                  <span className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${institutionColors[job.institution] ?? "bg-ink-100 text-ink-600"}`}>
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
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-ink-400">
            To explore more openings,{" "}
            <a href="#" className="text-amber-500 hover:underline">view here</a>
          </p>
        </div>

        {/* Sponsorship section */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Sponsorship & Support</CardTitle>
              <Badge variant="sage">Open</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-600 leading-relaxed mb-5">
              MIFEA welcomes donations, collaborations, and sponsorships from organisations that
              want to contribute to Islamic finance human capital development in Nigeria.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {["Donation", "Collaboration", "Sponsorship"].map((type) => (
                <button
                  key={type}
                  className="py-3 rounded-xl border-2 border-sand-200 text-sm font-semibold text-ink-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 transition-all"
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-sand-50 rounded-xl p-4 text-xs text-ink-600 space-y-1.5">
                <p className="font-semibold text-ink-700 mb-2">Transfer by bank</p>
                <p className="font-mono font-semibold text-ink-900 text-sm">900011109</p>
                <p className="font-semibold text-ink-800">FINACCESS SUPPORT</p>
              </div>
              <div className="bg-sand-50 rounded-xl p-4 text-xs text-ink-600 space-y-1.5">
                <p className="font-semibold text-ink-700 mb-2">Transfer by wallet</p>
                <p className="font-mono font-semibold text-ink-900 text-sm">33211BG112</p>
                <p className="text-ink-400">Pay from Savings available</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
