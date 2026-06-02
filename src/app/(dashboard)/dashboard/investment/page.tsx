"use client";

import * as React from "react";
import Link from "next/link";
import { TrendingUp, Info, ExternalLink } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TransferModal } from "@/components/ui/transfer-modal";
import { mockInvestment, bankDetails } from "@/lib/mock-data";
import { formatNaira, formatPercent, percentAway } from "@/lib/utils";

const SUGGESTED_AMOUNT = mockInvestment.goalAmount * 0.25;

export default function InvestmentPage() {
  const [transferOpen, setTransferOpen] = React.useState(false);
  const [payFrom, setPayFrom] = React.useState<"savings" | "investment">("savings");
  const [confirmed, setConfirmed] = React.useState(false);

  const pct = formatPercent(mockInvestment.amountInvested, mockInvestment.goalAmount);
  const away = percentAway(mockInvestment.amountInvested, mockInvestment.goalAmount);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Investment" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Header card */}
        <div className="bg-ink-800 rounded-2xl p-7 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-amber-400" />
              <Badge variant="amber">CIPA — Certified Islamic Professional Accountant</Badge>
            </div>
            <h2 className="text-white font-display text-3xl font-bold mb-1">
              {formatNaira(mockInvestment.amountInvested)}
              <span className="text-ink-400 text-lg font-normal ml-2">invested</span>
            </h2>
            <p className="text-ink-400 text-sm">
              Goal: {formatNaira(mockInvestment.goalAmount)} · You are{" "}
              <span className="text-amber-400 font-semibold">{away}% away</span>
            </p>
            <div className="mt-4">
              <Progress value={pct} colorClass="bg-amber-500" showValue />
            </div>
            <p className="text-xs text-ink-500 mt-3 font-medium">{mockInvestment.cadence}</p>
          </div>
          <div className="flex flex-col gap-3">
            <Button variant="primary" size="md" onClick={() => setTransferOpen(true)}>
              Add investment
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
            <span>✓</span> Investment transfer confirmed.
          </div>
        )}

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-4 w-4 text-amber-500" /> Investment plan details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-3 text-sm">
                {[
                  { label: "Certification", value: "CIPA — Certified Islamic Professional Accountant" },
                  { label: "Investment goal", value: formatNaira(mockInvestment.goalAmount) },
                  { label: "Amount invested", value: formatNaira(mockInvestment.amountInvested) },
                  { label: "Remaining", value: formatNaira(mockInvestment.goalAmount - mockInvestment.amountInvested) },
                  { label: "Recommended cadence", value: mockInvestment.cadence },
                  { label: "Suggested amount", value: formatNaira(SUGGESTED_AMOUNT) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-start gap-3">
                    <dt className="text-ink-500 shrink-0">{label}</dt>
                    <dd className="font-medium text-ink-900 text-right">{value}</dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          {/* Pay from */}
          <Card>
            <CardHeader><CardTitle>Pay from</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-ink-500 mb-4">Choose your funding source for this investment.</p>
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => setPayFrom("savings")}
                  className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${payFrom === "savings" ? "border-amber-500 bg-amber-50 text-amber-600" : "border-sand-200 text-ink-500 hover:border-amber-200"}`}
                >
                  From Savings
                </button>
                <button
                  onClick={() => setPayFrom("investment")}
                  className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${payFrom === "investment" ? "border-ink-700 bg-ink-50 text-ink-800" : "border-sand-200 text-ink-500 hover:border-ink-300"}`}
                >
                  New Transfer
                </button>
              </div>
              <p className="text-xs text-ink-400 mb-4">
                {payFrom === "savings"
                  ? "This will deduct from your current savings balance."
                  : "Make a fresh bank or wallet transfer to fund your investment."}
              </p>
              <Button variant="primary" size="md" className="w-full" onClick={() => setTransferOpen(true)}>
                {payFrom === "savings" ? "Invest 25% from Savings" : "Make Investment Transfer"}
              </Button>
              <p className="text-xs text-ink-400 mt-4">
                For more details on the investment plan,{" "}
                <a href="#" className="text-amber-500 hover:underline">visit here</a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <TransferModal
        open={transferOpen}
        onOpenChange={setTransferOpen}
        amount={SUGGESTED_AMOUNT}
        bankDetails={bankDetails.savings}
        title="Investment Transfer"
        onConfirm={() => setConfirmed(true)}
      />
    </div>
  );
}
