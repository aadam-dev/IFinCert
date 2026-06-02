import type { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = { title: "FAQ" };

const faqs = [
  {
    q: "What is MIFEA?",
    a: "MIFEA (Making Islamic Finance Education Accessible) is a FinTech platform that helps Nigerians access internationally recognised Islamic finance certifications through savings plans, scholarships, Candidate-Investor support, and job placement services.",
  },
  {
    q: "Who can register on MIFEA?",
    a: "Anyone interested in Islamic finance can register — whether you are a university student, recent graduate, or working professional. You select your role (Student or Non-Student) during sign-up, which affects your eligibility for certain scholarship programmes.",
  },
  {
    q: "What certifications does MIFEA support?",
    a: "MIFEA supports eight internationally recognised certifications: CSAA, CIPA, CPSS, ACIFE (Financial Analysis), ACIFE (Accountant), IFQ, CPIF, and CIFE — covering foundation through professional level.",
  },
  {
    q: "How does the savings plan work?",
    a: "You set a certification goal (e.g., ₦2,000,000 for CSAA). MIFEA recommends saving 20% of the goal monthly. You transfer contributions to the FINACCESS bank account or wallet, confirm the transfer, and track your progress on your dashboard.",
  },
  {
    q: "What is the Candidate-Investor (C/I) Support programme?",
    a: "C/I Support is a Sharī'ah-compliant sponsorship model. A private investor or institution pays your full certification and training costs. In return, you complete a structured internship or service agreement with the investor's organisation. It is grounded in Qard Hasan principles.",
  },
  {
    q: "What scholarships are available?",
    a: "MIFEA offers both Full and Partial Scholarships for CIPA, CSAA, IFQ, and CIFA. Applications require a User ID, a 500-word Statement of Motivation, evidence of prior commitment to Islamic finance, and two Statements of Confidence (academic and administrative). Selection is competitive and not guaranteed.",
  },
  {
    q: "How does job placement work?",
    a: "MIFEA partners with Islamic financial institutions including JAIZ Bank, Lotus Bank, IFNG, IsBD, TAJ Bank, AAOIFI, Halvest, and STEC. Once certified, you can apply directly to open roles listed on your dashboard.",
  },
  {
    q: "Is all funding on MIFEA Sharī'ah-compliant?",
    a: "Yes. Every financial structure on MIFEA — from savings and investment plans to C/I Support and donor sponsorships — is designed in accordance with Islamic finance principles, avoiding interest (ribā) and ensuring ethical transaction structures.",
  },
  {
    q: "What payment methods are accepted?",
    a: "Contributions can be made via bank transfer to FINACCESS (account number 00077722312) or via the MIFEA wallet (wallet ID 22DDS1200). You confirm each transaction on your dashboard.",
  },
  {
    q: "How do I contact the MIFEA team?",
    a: "Email us at numerouno081@gmail.com or call +2348126844811 / +2348073881404. Our office is at Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria.",
  },
];

export default function FAQPage() {
  return (
    <div>
      <section className="bg-ink-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl font-bold text-white mb-4">
            Frequently asked questions
          </h1>
          <p className="text-ink-300 text-lg">
            Everything you need to know about MIFEA. Can&apos;t find an answer?{" "}
            <a href="mailto:numerouno081@gmail.com" className="text-amber-400 hover:underline">
              Email us directly.
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="divide-y divide-sand-200">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-0">
                <AccordionTrigger className="text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-ink-600 leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
