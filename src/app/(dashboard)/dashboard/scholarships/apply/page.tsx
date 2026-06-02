"use client";

import * as React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Upload, Check, ArrowRight } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3;

function StepIndicator({ current, total }: { current: Step; total: number }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => i + 1).map((n, i) => (
        <React.Fragment key={n}>
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
              n < current
                ? "bg-sage-600 text-white"
                : n === current
                ? "bg-amber-500 text-white"
                : "bg-sand-200 text-ink-400"
            )}
          >
            {n < current ? <Check className="h-3.5 w-3.5" /> : n}
          </div>
          {i < total - 1 && (
            <div className={cn("flex-1 h-0.5 rounded-full", n < current ? "bg-amber-500" : "bg-sand-200")} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function FileUploadArea({ label }: { label: string }) {
  const [file, setFile] = React.useState<string | null>(null);
  return (
    <div>
      <p className="text-sm font-medium text-ink-700 mb-2">{label}</p>
      <label
        className={cn(
          "flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed cursor-pointer transition-colors",
          file ? "border-sage-600 bg-sage-100/40" : "border-sand-200 bg-sand-50 hover:border-amber-300 hover:bg-amber-50/30"
        )}
      >
        <input
          type="file"
          className="sr-only"
          onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
        />
        {file ? (
          <div className="flex items-center gap-2 text-sage-700 text-sm font-medium">
            <Check className="h-4 w-4" /> {file}
          </div>
        ) : (
          <>
            <Upload className="h-5 w-5 text-ink-400 mb-2" />
            <p className="text-xs text-ink-400">Click to upload (PDF, DOC — max 5MB)</p>
          </>
        )}
      </label>
    </div>
  );
}

function ScholarshipApplyContent() {
  const params = useSearchParams();
  const router = useRouter();
  const cert = params.get("cert") ?? "CIPA";
  const tier = params.get("tier") ?? "full";
  const [step, setStep] = React.useState<Step>(1);
  const [isCISupport, setIsCISupport] = React.useState(false);
  const [agreedTerms, setAgreedTerms] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        <DashboardTopBar title="Scholarship Application" />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center max-w-sm">
            <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Check className="h-8 w-8 text-sage-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-2">Application submitted</h2>
            <p className="text-ink-500 text-sm mb-6">
              Your {tier} scholarship application for {cert} has been received. We will review your
              submission and respond via email. Application does not guarantee selection.
            </p>
            <Button variant="primary" size="md" onClick={() => router.push("/dashboard/scholarships")}>
              Back to Scholarships
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Scholarship Application" />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-sm font-bold text-amber-500 bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-xl">
              {cert}
            </span>
            <Badge variant={tier === "full" ? "sage" : "amber"} size="md" className="capitalize">
              {tier} scholarship
            </Badge>
          </div>

          <StepIndicator current={step} total={3} />

          <form onSubmit={handleSubmit}>
            {/* Step 1: Identity */}
            {step === 1 && (
              <Card>
                <CardHeader><CardTitle>Step 1 — Identity & Motivation</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <Input label="User ID" name="userId" placeholder="Your MIFEA User ID" required />

                  <Textarea
                    label="Statement of Motivation (500 words max)"
                    name="motivation"
                    placeholder="Explain your motivation for pursuing this scholarship..."
                    required
                    rows={7}
                    hint="Describe your background and commitment to Islamic finance"
                  />

                  <Textarea
                    label="How would this scholarship benefit you? (500 words max)"
                    name="benefit"
                    placeholder="Describe the specific benefits and opportunities this scholarship would open for you..."
                    required
                    rows={5}
                  />

                  <div className="flex items-center gap-3 pt-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={isCISupport}
                        onChange={(e) => setIsCISupport(e.target.checked)}
                        className="w-4 h-4 accent-amber-500"
                      />
                      <span className="text-sm text-ink-700">
                        This application is for <span className="font-semibold text-amber-600">C/I Support</span>{" "}
                        (Candidate-Investor sponsorship)
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button type="button" variant="primary" size="md" onClick={() => setStep(2)}>
                      Continue <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Evidence */}
            {step === 2 && (
              <Card>
                <CardHeader><CardTitle>Step 2 — Supporting Evidence</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <FileUploadArea label="Evidence of previous commitment to Islamic finance (papers, certifications, proposals, etc.)" />
                  <FileUploadArea label="Statement of Confidence — Academic (from an academic referee)" />
                  <FileUploadArea label="Statement of Confidence — Administrative (from an administrative referee)" />

                  <div className="flex justify-between pt-2">
                    <Button type="button" variant="outline" size="md" onClick={() => setStep(1)}>← Back</Button>
                    <Button type="button" variant="primary" size="md" onClick={() => setStep(3)}>
                      Continue <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <Card>
                <CardHeader><CardTitle>Step 3 — Review & Submit</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <div className="bg-sand-50 rounded-xl p-5 space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-ink-500">Certification</span><span className="font-semibold">{cert}</span></div>
                    <div className="flex justify-between"><span className="text-ink-500">Scholarship type</span><span className="font-semibold capitalize">{tier}</span></div>
                    <div className="flex justify-between"><span className="text-ink-500">C/I Support</span><span className="font-semibold">{isCISupport ? "Yes" : "No"}</span></div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="w-4 h-4 accent-amber-500 mt-0.5"
                      required
                    />
                    <span className="text-sm text-ink-600">
                      I agree to the{" "}
                      <a href="/legal/terms" target="_blank" className="text-amber-500 hover:underline">
                        terms and conditions
                      </a>{" "}
                      of this scholarship. I understand that submission does not guarantee selection.
                    </span>
                  </label>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <p className="text-xs text-amber-700">
                      Application does not guarantee selection. Successful candidates will be contacted
                      via their registered email address.
                    </p>
                  </div>

                  <div className="flex justify-between pt-2">
                    <Button type="button" variant="outline" size="md" onClick={() => setStep(2)}>← Back</Button>
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={!agreedTerms}
                      loading={loading}
                    >
                      Submit Application
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function ScholarshipApplyPage() {
  return (
    <React.Suspense fallback={
      <div className="flex flex-col h-full overflow-hidden">
        <DashboardTopBar title="Scholarship Application" />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
        </div>
      </div>
    }>
      <ScholarshipApplyContent />
    </React.Suspense>
  );
}
