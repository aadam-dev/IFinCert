import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/marketing/page-hero";
import { marketingImages } from "@/lib/images";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "What is IFinCert?",
    a: "IFinCert (Islamic Finance Certification Platform) is a FinTech/EdTech platform that helps Nigerians access internationally recognised Islamic finance certifications through structured savings plans, competitive scholarships, Candidate-Investor support, and career placement services.",
  },
  {
    q: "Who can register on IFinCert?",
    a: "Anyone interested in Islamic finance can register, whether you are a university student, recent graduate, or working professional. You select your role (Student or Non-Student) during sign-up, which affects your eligibility for certain scholarship programmes.",
  },
  {
    q: "What certifications does IFinCert support?",
    a: "IFinCert supports eight internationally recognised certifications: CSAA, CIPA, CPSS, ACIFE (Financial Analysis), ACIFE (Accountant), IFQ, CPIF, and CIFE, covering foundation through professional level.",
  },
  {
    q: "How does the savings plan work?",
    a: "You set a certification goal (e.g., ₦2,000,000 for CSAA). IFinCert recommends saving 20% of the goal monthly. You transfer contributions to the FINACCESS bank account or wallet, confirm the transfer, and track your progress on your dashboard.",
  },
  {
    q: "What is the Candidate-Investor (C/I) Support programme?",
    a: "C/I Support is a Sharia-compliant sponsorship model. A private investor or institution pays your full certification and training costs. In return, you complete a structured internship or service agreement with the investor's organisation. It is grounded in Qard Hasan principles.",
  },
  {
    q: "What scholarships are available?",
    a: "IFinCert offers both Full and Partial Scholarships for CIPA, CSAA, IFQ, and CIFA. Applications require a User ID, a 500-word Statement of Motivation, evidence of prior commitment to Islamic finance, and two Statements of Confidence (academic and administrative). Selection is competitive and not guaranteed.",
  },
  {
    q: "How does job placement work?",
    a: "IFinCert partners with Islamic financial institutions including JAIZ Bank, Lotus Bank, IFNG, IsBD, TAJ Bank, AAOIFI, Halvest, and STEC. Once certified, you can apply directly to open roles listed on your dashboard.",
  },
  {
    q: "Is all funding on IFinCert Sharia-compliant?",
    a: "Yes. Every financial structure on IFinCert, from savings and investment plans to C/I Support and donor sponsorships, is designed in accordance with Islamic finance principles, avoiding interest (riba) and ensuring ethical transaction structures.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Contributions can be made via bank transfer to FINACCESS (account number 00077722312) or via the IFinCert wallet (wallet ID 22DDS1200). You confirm each transaction on your dashboard.",
  },
  {
    q: "How do I contact the IFinCert team?",
    a: "Email us at numerouno081@gmail.com or call +2348126844811 / +2348073881404. Our office is at Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-sand-50 text-ink-900 min-h-screen">
      <PageHero
        imageSrc={marketingImages.faq}
        imageAlt="Professional consultation"
        align="center"
        minHeight="min-h-[280px] sm:min-h-[340px]"
      >
        <Badge variant="indigo" className="mb-4">Questions & Answers</Badge>
        <h1 className="font-display hero-heading font-bold text-ink-950 mb-4 sm:mb-6">
          Frequently asked questions
        </h1>
        <p className="text-ink-800 sm:text-ink-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about IFinCert. Can&apos;t find an answer?{" "}
          <a href="mailto:numerouno081@gmail.com" className="link-gold transition-colors">
            Email us directly.
          </a>
        </p>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="divide-y divide-sand-200">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-0 py-2">
                <AccordionTrigger className="text-base text-ink-900 hover:text-ink-600 transition-colors font-medium py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-600 leading-relaxed text-sm pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
