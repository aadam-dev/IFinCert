import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scholarships } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Scholarships" };

export default function ScholarshipsPage() {
  const fullScholarships = scholarships.filter((s) => s.tier === "full");
  const partialScholarships = scholarships.filter((s) => s.tier === "partial");

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Scholarships" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex items-start gap-3">
          <Info className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-amber-800 mb-1">Application portal is currently open</p>
            <p className="text-sm text-amber-700">
              Candidates must display valid identity (student, graduate, or worker) and demonstrate
              commitment to Islamic finance and financial struggle. Application does not guarantee selection.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Full scholarships */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Full Scholarships</CardTitle>
                <Badge variant="sage">100% funded</Badge>
              </div>
              <p className="text-sm text-ink-500">Complete certification fee covered.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {fullScholarships.map((s) => (
                  <div
                    key={s.cert}
                    className="flex items-center justify-between py-3 border-b border-sand-100 last:border-0"
                  >
                    <span className="font-mono text-sm font-bold text-amber-500 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl">
                      {s.cert}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/scholarships/apply?cert=${s.cert}&tier=full`}>
                        Apply here <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Partial scholarships */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Partial Scholarships</CardTitle>
                <Badge variant="amber">Subsidised</Badge>
              </div>
              <p className="text-sm text-ink-500">Partial coverage toward certification fees.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {partialScholarships.map((s) => (
                  <div
                    key={s.cert}
                    className="flex items-center justify-between py-3 border-b border-sand-100 last:border-0"
                  >
                    <span className="font-mono text-sm font-bold text-amber-500 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl">
                      {s.cert}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/dashboard/scholarships/apply?cert=${s.cert}&tier=partial`}>
                        Apply here <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* C/I Support info */}
        <Card className="border-ink-200">
          <CardHeader>
            <CardTitle>Candidate-Investor (C/I) Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-ink-600 leading-relaxed mb-4">
              The C/I Support provides a full enrollment sponsored by a private organisation with interest
              in the candidate&apos;s service after completion. This partnership exposes the candidate to
              professional training and ensures contribution to the sponsor&apos;s organisation through a
              compulsory internship.
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/dashboard/support">
                Learn about C/I Support <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
