"use client";

import * as React from "react";
import { Calendar, Download } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TransferModal } from "@/components/ui/transfer-modal";
import { trainingCohorts, bankDetails } from "@/lib/mock-data";
import { formatNaira } from "@/lib/utils";

export default function TrainingPage() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [payFrom, setPayFrom] = React.useState<"savings" | "investment">("savings");
  const [transferOpen, setTransferOpen] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);

  const toggleCert = (cert: string) => {
    setSelected((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const total = selected.reduce((sum, cert) => {
    const cohort = trainingCohorts.find((c) => c.cert === cert);
    return sum + (cohort?.costNGN ?? 0);
  }, 0);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Pay for Training" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-ink-900">Available Training Programmes</h2>
            <p className="text-sm text-ink-500 mt-1">Select the certifications you want to train for — August 2025 cohort.</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4" /> Download Brochure
          </Button>
        </div>

        {confirmed && (
          <div className="bg-sage-100 border border-sage-600/20 rounded-xl px-5 py-3 flex items-center gap-3 text-sage-700 text-sm">
            <span>✓</span> Payment submitted. We will confirm your registration shortly.
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {/* Available trainings */}
          <div className="lg:col-span-3 space-y-4">
            <Card>
              <CardHeader><CardTitle>Available Trainings</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-1">
                  {trainingCohorts.map((cohort) => (
                    <div
                      key={cohort.cert}
                      className="flex items-center justify-between py-4 border-b border-sand-100 last:border-0"
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="checkbox"
                          id={`cert-${cohort.cert}`}
                          checked={selected.includes(cohort.cert)}
                          onChange={() => toggleCert(cohort.cert)}
                          className="w-4 h-4 accent-amber-500 cursor-pointer"
                        />
                        <label htmlFor={`cert-${cohort.cert}`} className="cursor-pointer">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="font-mono text-sm font-bold text-amber-500 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-lg">
                              {cohort.cert}
                            </span>
                            <Badge variant="default" size="sm" className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" /> {cohort.date}
                            </Badge>
                          </div>
                        </label>
                      </div>
                      <span className="text-sm font-semibold text-ink-900">{formatNaira(cohort.costNGN)}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pay from */}
            <Card>
              <CardHeader><CardTitle>Pay from</CardTitle></CardHeader>
              <CardContent>
                <div className="flex gap-3">
                  <button
                    onClick={() => setPayFrom("savings")}
                    className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${payFrom === "savings" ? "border-amber-500 bg-amber-50 text-amber-600" : "border-sand-200 text-ink-500 hover:border-amber-200"}`}
                  >
                    Savings
                  </button>
                  <button
                    onClick={() => setPayFrom("investment")}
                    className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${payFrom === "investment" ? "border-ink-700 bg-ink-50 text-ink-800" : "border-sand-200 text-ink-500 hover:border-ink-300"}`}
                  >
                    Investment
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment panel */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-sand-200 sticky top-0">
              <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
              <CardContent>
                {selected.length === 0 ? (
                  <p className="text-sm text-ink-400 text-center py-4">
                    Select a training programme to continue.
                  </p>
                ) : (
                  <div className="space-y-3 mb-5">
                    {selected.map((cert) => {
                      const cohort = trainingCohorts.find((c) => c.cert === cert)!;
                      return (
                        <div key={cert} className="flex justify-between text-sm">
                          <span className="text-ink-600">{cert} — {cohort.date}</span>
                          <span className="font-semibold text-ink-900">{formatNaira(cohort.costNGN)}</span>
                        </div>
                      );
                    })}
                    <div className="flex justify-between text-sm font-bold text-ink-900 pt-3 border-t border-sand-200">
                      <span>Total</span>
                      <span>{formatNaira(total)}</span>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="bg-sand-50 rounded-xl p-4 text-xs text-ink-500 space-y-1.5">
                    <p className="font-semibold text-ink-700 mb-2">Transfer by bank</p>
                    <p className="font-mono font-semibold text-ink-900">{bankDetails.savings.accountNumber}</p>
                    <p className="font-semibold text-ink-900">{bankDetails.savings.bankName}</p>
                  </div>
                  <div className="bg-sand-50 rounded-xl p-4 text-xs text-ink-500 space-y-1.5">
                    <p className="font-semibold text-ink-700 mb-2">Transfer by wallet</p>
                    <p className="font-mono font-semibold text-ink-900">{bankDetails.savings.walletId}</p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  className="w-full mt-4"
                  disabled={selected.length === 0}
                  onClick={() => setTransferOpen(true)}
                >
                  Confirm Payment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <TransferModal
        open={transferOpen}
        onOpenChange={setTransferOpen}
        amount={total}
        bankDetails={bankDetails.savings}
        title="Pay for Training"
        onConfirm={() => setConfirmed(true)}
      />
    </div>
  );
}
