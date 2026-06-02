"use client";

import * as React from "react";
import Link from "next/link";
import { PiggyBank, Info, ExternalLink } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TransferModal } from "@/components/ui/transfer-modal";
import { mockSavings, bankDetails } from "@/lib/mock-data";
import { formatNaira, formatPercent, percentAway } from "@/lib/utils";

const SUGGESTED_AMOUNT = mockSavings.goalAmount * 0.2;

export default function SavingsPage() {
  const [transferOpen, setTransferOpen] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  const pct = formatPercent(mockSavings.amountSaved, mockSavings.goalAmount);
  const away = percentAway(mockSavings.amountSaved, mockSavings.goalAmount);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Savings" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Header card */}
        <div className="bg-ink-800 rounded-2xl p-7 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <PiggyBank className="h-5 w-5 text-amber-400" />
              <Badge variant="amber">CSAA — Certified Sharia Auditor</Badge>
            </div>
            <h2 className="text-white font-display text-3xl font-bold mb-1">
              {formatNaira(mockSavings.amountSaved)}
              <span className="text-ink-400 text-lg font-normal ml-2">saved</span>
            </h2>
            <p className="text-ink-400 text-sm">
              Goal: {formatNaira(mockSavings.goalAmount)} · You are{" "}
              <span className="text-amber-400 font-semibold">{away}% away</span>
            </p>
            <div className="mt-4">
              <Progress value={pct} colorClass="bg-amber-500" showValue />
            </div>
            <p className="text-xs text-ink-500 mt-3 font-medium">{mockSavings.cadence}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="primary" size="md" onClick={() => setTransferOpen(true)}>
              Add to savings
            </Button>
            <Button variant="outline" size="md" className="border-ink-600 text-ink-200 hover:bg-ink-700 hover:text-white" asChild>
              <Link href="/dashboard/certifications">
                Pick your track <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {confirmed && (
          <div className="bg-sage-100 border border-sage-600/20 rounded-xl px-5 py-3 flex items-center gap-3 text-sage-700 text-sm">
            <span>✓</span>
            Transfer confirmed — your savings have been updated.
          </div>
        )}

        {/* Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-4 w-4 text-amber-500" /> Savings plan details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Certification", value: "CSAA — Certified Sharia Auditor (AAOIFI)" },
                  { label: "Savings goal", value: formatNaira(mockSavings.goalAmount) },
                  { label: "Amount saved", value: formatNaira(mockSavings.amountSaved) },
                  { label: "Remaining", value: formatNaira(mockSavings.goalAmount - mockSavings.amountSaved) },
                  { label: "Recommended cadence", value: mockSavings.cadence },
                  { label: "Suggested monthly amount", value: formatNaira(SUGGESTED_AMOUNT) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3">
                    <dt className="text-ink-500 shrink-0">{label}</dt>
                    <dd className="font-medium text-ink-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          {/* Recent transfers */}
          <Card>
            <CardHeader><CardTitle>Transfer history</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-1">
                {mockSavings.transfers.map((t) => (
                  <div
                    key={t.id}
                    className="flex items-center justify-between py-3 border-b border-sand-100 last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink-800 capitalize">{t.method} transfer</p>
                      <p className="text-xs text-ink-400">{t.createdAt.toLocaleDateString("en-NG")}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-ink-900">{formatNaira(t.amount)}</p>
                      <Badge
                        variant={t.status === "confirmed" ? "sage" : "amber"}
                        size="sm"
                        className="capitalize"
                      >
                        {t.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink-400 mt-4">
                Save for a certification every month —{" "}
                <Link href="/dashboard/certifications" className="text-amber-500 hover:underline">
                  view certifications
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* More details */}
        <div className="text-center">
          <p className="text-sm text-ink-400">
            For more details on the savings plan,{" "}
            <a href="#" className="text-amber-500 hover:underline">visit here</a>
          </p>
        </div>
      </div>

      <TransferModal
        open={transferOpen}
        onOpenChange={setTransferOpen}
        amount={SUGGESTED_AMOUNT}
        bankDetails={bankDetails.savings}
        title="Add to Savings"
        onConfirm={() => setConfirmed(true)}
      />
    </div>
  );
}
