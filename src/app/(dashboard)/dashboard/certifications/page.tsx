import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Lock, Circle, ArrowRight } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications } from "@/lib/mock-data";
import { formatNaira } from "@/lib/utils";
import type { CertStatus } from "@/types";

export const metadata: Metadata = { title: "Certifications" };

const statusConfig: Record<CertStatus, { label: string; icon: React.ElementType; badgeVariant: "sage" | "amber" | "ink" | "default" }> = {
  enrolled:  { label: "Enrolled",  icon: CheckCircle2, badgeVariant: "sage" },
  eligible:  { label: "Eligible",  icon: Circle,       badgeVariant: "amber" },
  completed: { label: "Completed", icon: CheckCircle2, badgeVariant: "sage" },
  locked:    { label: "Locked",    icon: Lock,         badgeVariant: "default" },
};

const levelOrder = { foundation: 0, intermediate: 1, advanced: 2, professional: 3 };

export default function CertificationsPage() {
  const sorted = [...certifications].sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Certifications" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6">

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Your certification pathway</h2>
            <p className="text-sm text-ink-500 mt-1">Track your progress toward each globally recognised credential.</p>
          </div>
          <a href="#" className="text-sm text-amber-500 hover:underline flex items-center gap-1">
            For more details <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sorted.map((cert) => {
            const cfg = statusConfig[cert.status];
            const StatusIcon = cfg.icon;
            const isLocked = cert.status === "locked";

            return (
              <Card
                key={cert.code}
                className={isLocked ? "opacity-60" : "hover:shadow-md hover:border-amber-200 transition-all duration-200"}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-amber-500 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl">
                        {cert.code}
                      </span>
                      <Badge variant={cfg.badgeVariant} size="sm" className="flex items-center gap-1">
                        <StatusIcon className="h-3 w-3" />
                        {cfg.label}
                      </Badge>
                    </div>
                    <span className="text-xs text-ink-400 capitalize shrink-0">{cert.level}</span>
                  </div>
                  <h3 className="text-base font-semibold text-ink-900 mb-1 leading-snug">{cert.name}</h3>
                  <p className="text-xs text-ink-400 mb-1">{cert.body}</p>
                  <p className="text-sm text-ink-500 leading-relaxed mb-5">{cert.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-sand-100">
                    <div>
                      <p className="text-xs text-ink-400">Cost</p>
                      <p className="text-sm font-semibold text-ink-900">
                        {formatNaira(cert.costNGN)}
                      </p>
                    </div>
                    {!isLocked && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/savings`}>
                          {cert.status === "enrolled" ? "View savings" : "Start saving"}
                        </Link>
                      </Button>
                    )}
                    {isLocked && (
                      <span className="text-xs text-ink-400 flex items-center gap-1">
                        <Lock className="h-3 w-3" /> Complete prior certs
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
