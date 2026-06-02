import type { Metadata } from "next";
import Link from "next/link";
import { HeartHandshake, ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bankDetails, contactInfo } from "@/lib/mock-data";

export const metadata: Metadata = { title: "Support" };

const applicationSteps = [
  { n: 1, text: "Pick an investor and generate your C/I Support Registration Number" },
  { n: 2, text: 'Go to the Scholarship Application Portal and select "C/I Support" when filling the form' },
  { n: 3, text: "Fill in your User ID correctly" },
  { n: 4, text: "Submit your application" },
];

export default function SupportPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Support" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* C/I Support explainer */}
        <div className="bg-ink-800 rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
              <HeartHandshake className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <Badge variant="amber">Sharī'ah-Compliant</Badge>
              <h2 className="text-white font-display text-xl font-bold mt-1">
                Candidate-Investor Support
              </h2>
            </div>
          </div>
          <p className="text-ink-300 leading-relaxed text-sm max-w-3xl">
            The C/I Support serves as a sponsorship that comes with rewards. It is a full enrollment
            sponsored by private organisations having interest in the service of the candidate after
            completion. This partnership enables the candidate to gain professional training, exposes
            them to practice, and ensures their contribution to the sponsor&apos;s organisation. It is a
            compulsory internship which varies by institution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Application process */}
          <Card>
            <CardHeader><CardTitle>Application Process</CardTitle></CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {applicationSteps.map((s) => (
                  <li key={s.n} className="flex items-start gap-4">
                    <div className="w-7 h-7 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {s.n}
                    </div>
                    <p className="text-sm text-ink-700 leading-relaxed">{s.text}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-3">
                <Button variant="primary" size="md" asChild>
                  <Link href="/dashboard/scholarships/apply?ci=true">
                    Pick an investor & Generate Reg. No. <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="md" asChild>
                  <Link href="/dashboard/scholarships/apply?ci=true">
                    Go to Scholarship Application Portal
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Download className="h-4 w-4" /> Download Terms & Conditions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact & donation */}
          <div className="space-y-4">
            <Card>
              <CardHeader><CardTitle>Sponsorship & Support</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  {["Donation", "Collaboration", "Sponsorship"].map((type) => (
                    <button
                      key={type}
                      className="py-3 px-5 rounded-xl border-2 border-sand-200 text-sm font-semibold text-ink-600 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-600 transition-all text-left"
                    >
                      → {type}
                    </button>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="bg-sand-50 rounded-xl p-4 text-xs text-ink-600">
                    <p className="font-semibold text-ink-700 mb-2">Transfer by bank</p>
                    <p className="font-mono font-semibold text-ink-900">{bankDetails.support.accountNumber}</p>
                    <p className="font-semibold">{bankDetails.support.bankName}</p>
                  </div>
                  <div className="bg-sand-50 rounded-xl p-4 text-xs text-ink-600">
                    <p className="font-semibold text-ink-700 mb-2">Transfer by wallet</p>
                    <p className="font-mono font-semibold text-ink-900">{bankDetails.support.walletId}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader><CardTitle>Contact Info</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-sm text-ink-600 hover:text-amber-500 transition-colors group">
                  <div className="w-8 h-8 bg-sand-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <Mail className="h-4 w-4 text-ink-500 group-hover:text-amber-500" />
                  </div>
                  {contactInfo.email}
                </a>
                {contactInfo.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone}`} className="flex items-center gap-3 text-sm text-ink-600 hover:text-amber-500 transition-colors group">
                    <div className="w-8 h-8 bg-sand-100 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      <Phone className="h-4 w-4 text-ink-500 group-hover:text-amber-500" />
                    </div>
                    {phone}
                  </a>
                ))}
                <div className="flex items-start gap-3 text-sm text-ink-600">
                  <div className="w-8 h-8 bg-sand-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-ink-500" />
                  </div>
                  <span>{contactInfo.address}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
