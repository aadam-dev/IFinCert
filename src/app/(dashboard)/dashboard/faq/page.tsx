import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  { q: "How do I set up my savings plan?", a: "Go to Savings in the sidebar. Your CSAA plan is pre-configured with a ₦2,000,000 goal. Click 'Add to savings', choose your transfer method (bank or wallet), and confirm. Your progress updates immediately." },
  { q: "Can I save toward multiple certifications at once?", a: "Currently each account has one active savings plan and one investment plan. You can redirect your plan to a different certification by updating your track in the Savings page." },
  { q: "What is the difference between Savings and Investment?", a: "The Savings plan targets the CSAA certification with a monthly 20% contribution cadence. The Investment plan targets CIPA with a bi-annual 25% contribution. Both grow toward your certification fees separately." },
  { q: "How do I apply for a scholarship?", a: "Go to Scholarships in the sidebar. Select the certification and tier (Full or Partial), then complete the three-step application form — motivation, supporting evidence, and final review. Submission does not guarantee selection." },
  { q: "What is C/I Support and how do I qualify?", a: "The Candidate-Investor Support is a full sponsorship by a private organisation. You apply through the Scholarship portal by selecting the C/I Support option. An investor picks you, covers your training, and you complete a structured internship in return." },
  { q: "How long does it take for my transfer to be confirmed?", a: "Bank transfers are typically confirmed within 1–2 business days. Wallet transfers are usually instant. Once confirmed, your dashboard balance updates." },
  { q: "Can I pay for training from my savings?", a: "Yes. On the Pay for Training page, select the training programmes you want and choose 'Pay from Savings' before confirming. The amount will be deducted from your savings balance." },
  { q: "How do I apply for a job at a partner institution?", a: "Go to Job Placement. Each listing has an 'Apply' button linking to the institution's external application portal. Ensure your profile and certifications are up to date before applying." },
  { q: "Is my personal data secure?", a: "Yes. MIFEA handles your data in accordance with the Nigeria Data Protection Regulation (NDPR). View our full Privacy Policy in the footer or by visiting /legal/privacy." },
  { q: "How do I contact the MIFEA team?", a: "Email numerouno081@gmail.com or call +2348126844811. Our office is at Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria. You can also use the Support page on your dashboard." },
];

export default function DashboardFAQPage() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="FAQ" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-ink-900">Frequently asked questions</h2>
            <p className="text-sm text-ink-500 mt-1">Quick answers about using your MIFEA account.</p>
          </div>

          <Card>
            <CardContent className="pt-2">
              <Accordion type="single" collapsible>
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-6 bg-amber-50 border border-amber-100 rounded-2xl p-6 text-center">
            <Mail className="h-6 w-6 text-amber-500 mx-auto mb-3" />
            <p className="text-sm font-semibold text-ink-900 mb-1">Still have questions?</p>
            <p className="text-sm text-ink-500 mb-3">Our team is ready to help.</p>
            <a href="mailto:numerouno081@gmail.com" className="text-sm text-amber-500 font-medium hover:underline">
              numerouno081@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
