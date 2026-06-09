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
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300"
            style={
              n < current
                ? { background: "linear-gradient(135deg, #10b981, #06b6d4)", color: "#030206" }
                : n === current
                ? { background: "linear-gradient(135deg, #10b981, #059669)", color: "#030206", boxShadow: "0 0 12px rgba(16,185,129,0.4)" }
                : { background: "rgba(100,116,139,0.15)", color: "#475569", border: "1px solid rgba(100,116,139,0.2)" }
            }
          >
            {n < current ? <Check className="h-3.5 w-3.5" /> : n}
          </div>
          {i < total - 1 && (
            <div
              className="flex-1 h-0.5 rounded-full transition-all duration-300"
              style={{ background: n < current ? "linear-gradient(90deg, #10b981, #06b6d4)" : "rgba(100,116,139,0.2)" }}
            />
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
      <p className="text-sm font-medium mb-2" style={{ color: "#cbd5e1" }}>{label}</p>
      <label
        className={cn(
          "flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed cursor-pointer transition-all duration-200"
        )}
        style={
          file
            ? { borderColor: "rgba(16,185,129,0.5)", background: "rgba(16,185,129,0.06)" }
            : { borderColor: "rgba(100,116,139,0.25)", background: "rgba(15,23,42,0.4)" }
        }
      >
        <input
          type="file"
          className="sr-only"
          onChange={(e) => setFile(e.target.files?.[0]?.name ?? null)}
        />
        {file ? (
          <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "#10b981" }}>
            <Check className="h-4 w-4" /> {file}
          </div>
        ) : (
          <>
            <Upload className="h-5 w-5 mb-2" style={{ color: "#475569" }} />
            <p className="text-xs" style={{ color: "#475569" }}>Click to upload (PDF, DOC — max 5MB)</p>
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
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(6,182,212,0.2))",
                border: "1px solid rgba(16,185,129,0.4)",
                boxShadow: "0 0 30px rgba(16,185,129,0.2)",
              }}
            >
              <Check className="h-8 w-8" style={{ color: "#10b981" }} />
            </div>
            <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "#e2e8f0" }}>
              Application submitted
            </h2>
            <p className="text-sm mb-6" style={{ color: "#64748b" }}>
              Your {tier} scholarship application for {cert} has been received. We will review your
              submission and respond via email. Application does not guarantee selection.
            </p>
            <Button
              variant="primary"
              size="md"
              onClick={() => router.push("/dashboard/scholarships")}
              style={{
                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                border: "none",
                color: "#030206",
                fontWeight: 700,
              }}
            >
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
            <span
              className="font-mono text-sm font-bold px-3 py-1.5 rounded-xl"
              style={{
                background: "rgba(16,185,129,0.1)",
                color: "#10b981",
                border: "1px solid rgba(16,185,129,0.2)",
              }}
            >
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
                <CardHeader><CardTitle>Step 1 — Identity &amp; Motivation</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <Input label="User ID" name="userId" placeholder="Your IFinCert User ID" required />

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
                        className="w-4 h-4"
                        style={{ accentColor: "#10b981" }}
                      />
                      <span className="text-sm" style={{ color: "#94a3b8" }}>
                        This application is for{" "}
                        <span className="font-semibold" style={{ color: "#10b981" }}>C/I Support</span>{" "}
                        (Candidate-Investor sponsorship)
                      </span>
                    </label>
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => setStep(2)}
                      style={{
                        background: "linear-gradient(135deg, #10b981, #06b6d4)",
                        border: "none",
                        color: "#030206",
                        fontWeight: 700,
                      }}
                    >
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
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      onClick={() => setStep(3)}
                      style={{
                        background: "linear-gradient(135deg, #10b981, #06b6d4)",
                        border: "none",
                        color: "#030206",
                        fontWeight: 700,
                      }}
                    >
                      Continue <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <Card>
                <CardHeader><CardTitle>Step 3 — Review &amp; Submit</CardTitle></CardHeader>
                <CardContent className="space-y-5">
                  <div
                    className="rounded-xl p-5 space-y-2 text-sm"
                    style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(100,116,139,0.15)" }}
                  >
                    <div className="flex justify-between">
                      <span style={{ color: "#64748b" }}>Certification</span>
                      <span className="font-semibold" style={{ color: "#e2e8f0" }}>{cert}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "#64748b" }}>Scholarship type</span>
                      <span className="font-semibold capitalize" style={{ color: "#e2e8f0" }}>{tier}</span>
                    </div>
                    <div className="flex justify-between">
                      <span style={{ color: "#64748b" }}>C/I Support</span>
                      <span className="font-semibold" style={{ color: "#e2e8f0" }}>{isCISupport ? "Yes" : "No"}</span>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5"
                      style={{ accentColor: "#10b981" }}
                      required
                    />
                    <span className="text-sm" style={{ color: "#64748b" }}>
                      I agree to the{" "}
                      <a href="/legal/terms" target="_blank" className="font-medium hover:opacity-80" style={{ color: "#10b981" }}>
                        terms and conditions
                      </a>{" "}
                      of this scholarship. I understand that submission does not guarantee selection.
                    </span>
                  </label>

                  <div
                    className="rounded-xl p-4"
                    style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}
                  >
                    <p className="text-xs" style={{ color: "#6ee7b7" }}>
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
                      style={
                        agreedTerms
                          ? { background: "linear-gradient(135deg, #10b981, #06b6d4)", border: "none", color: "#030206", fontWeight: 700 }
                          : {}
                      }
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
          <div
            className="w-8 h-8 animate-spin rounded-full border-2 border-t-transparent"
            style={{ borderColor: "rgba(16,185,129,0.3)", borderTopColor: "transparent" }}
          />
        </div>
      </div>
    }>
      <ScholarshipApplyContent />
    </React.Suspense>
  );
}
