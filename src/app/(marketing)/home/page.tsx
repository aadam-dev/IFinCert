import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Award,
  Users,
  Briefcase,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Making Islamic Finance Education Accessible",
};

const stats = [
  { value: "USD 4.5T+", label: "Global Islamic finance assets" },
  { value: "8", label: "Internationally recognised certifications" },
  { value: "₦0", label: "Upfront cost with C/I Support" },
  { value: "100%", label: "Sharī'ah-compliant funding" },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Access",
    description:
      "Connect with internationally accredited Islamic finance certifications from AAOIFI, CISI, and INCEIF — made affordable for Nigerians.",
    href: "/certifications",
    cta: "View certifications",
  },
  {
    icon: TrendingUp,
    title: "Training",
    description:
      "Structured savings and investment plans let you grow toward your certification cost — one contribution at a time.",
    href: "/register",
    cta: "Start saving",
  },
  {
    icon: Award,
    title: "Impact",
    description:
      "Scholarship support, Candidate-Investor partnerships, and direct job placement at Nigeria's leading Islamic financial institutions.",
    href: "/register",
    cta: "Apply for support",
  },
];

const features = [
  {
    icon: Award,
    title: "Scholarship Pathways",
    description:
      "Full and partial scholarships for CIPA, CSAA, IFQ, and CIFA — open to students and working professionals.",
  },
  {
    icon: Users,
    title: "Candidate-Investor Support",
    description:
      "Sharī'ah-compliant Qard Hasan sponsorships: an investor funds your training; you commit to a structured service agreement.",
  },
  {
    icon: TrendingUp,
    title: "Savings & Investment Plans",
    description:
      "Set a certification goal, save monthly, and invest bi-annually — watch your progress in real time on your dashboard.",
  },
  {
    icon: Briefcase,
    title: "Job Placement",
    description:
      "Direct pathways to open roles at JAIZ, Lotus, IFNG, TAJ, AAOIFI, and other partner institutions across Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "Sharī'ah-Compliant Funding",
    description:
      "Every financial structure on MIFEA — savings, investment, sponsorship — is rooted in Islamic finance principles.",
  },
  {
    icon: BookOpen,
    title: "8 Recognised Certifications",
    description:
      "From foundation (IFQ, CPSS) to professional (CPIF, CIPA) — chart your career path with globally recognised credentials.",
  },
];

const testimonials = [
  {
    quote:
      "MIFEA gave me a realistic path to my CIPA certification. The savings plan broke down an impossible number into something I could actually work toward.",
    name: "Aminat F.",
    role: "Final-year Finance student, Kwara State",
    initial: "A",
  },
  {
    quote:
      "The Candidate-Investor Support programme is genuinely innovative. It aligns incentives ethically — exactly what Islamic finance should be doing.",
    name: "Ibrahim K.",
    role: "Sharia Compliance Officer, Lagos",
    initial: "I",
  },
  {
    quote:
      "I went from not knowing where to start to being enrolled in the CSAA programme within six months of joining MIFEA.",
    name: "Zainab A.",
    role: "Banking professional, Abuja",
    initial: "Z",
  },
];

export default function LandingPage() {
  const featuredCerts = certifications.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative bg-ink-900 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-3xl" />
          <div className="absolute top-1/2 -left-60 w-[400px] h-[400px] rounded-full bg-ink-700/40 blur-2xl" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-amber-500/10 blur-3xl" />
          {/* Geometric lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <div className="max-w-3xl">
            <Badge variant="amber" size="md" className="mb-6">
              Now open for applications — August 2025 cohort
            </Badge>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
              Islamic Finance{" "}
              <span className="text-amber-400">Education</span>
              <br />
              for Every Nigerian
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-300 leading-relaxed max-w-2xl">
              MIFEA breaks down the financial barriers to internationally recognised Islamic
              finance certifications — through savings plans, scholarships, and Sharī'ah-compliant
              sponsorship programmes.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" asChild>
                <Link href="/register">
                  Create your account <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-ink-600 text-ink-200 hover:bg-ink-700 hover:text-white">
                <Link href="/certifications">Browse certifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="text-sm text-ink-500">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-ink-900 font-display">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Three pillars ── */}
      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4">How MIFEA works</Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink-900">
              Three pillars. One mission.
            </h2>
            <p className="mt-4 text-lg text-ink-500 max-w-2xl mx-auto">
              From zero to certified — MIFEA walks alongside you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="relative bg-white rounded-2xl border border-sand-200 p-8 hover:shadow-md hover:border-amber-200 transition-all duration-300 group"
                >
                  <div className="absolute top-6 right-6 text-5xl font-display font-bold text-sand-100 select-none">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink-900 mb-3">{pillar.title}</h3>
                  <p className="text-ink-500 leading-relaxed text-sm mb-6">{pillar.description}</p>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-500 hover:text-amber-600 group-hover:gap-2.5 transition-all"
                  >
                    {pillar.cta} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Certifications preview ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Badge variant="outline" className="mb-4">Internationally recognised</Badge>
              <h2 className="font-display text-4xl font-bold text-ink-900">
                Your certification pathway
              </h2>
              <p className="mt-3 text-ink-500 max-w-lg">
                From foundation to professional — choose the credential that fits your career stage.
              </p>
            </div>
            <Button variant="outline" size="md" asChild>
              <Link href="/certifications">View all 8 certifications <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCerts.map((cert) => (
              <div
                key={cert.code}
                className="bg-sand-50 rounded-2xl border border-sand-200 p-6 hover:border-amber-200 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-amber-500 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-lg">
                    {cert.code}
                  </span>
                  <span className="text-xs text-ink-400 capitalize">{cert.level}</span>
                </div>
                <h3 className="text-sm font-semibold text-ink-900 leading-snug mb-2">{cert.name}</h3>
                <p className="text-xs text-ink-500 mb-4 line-clamp-2">{cert.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-ink-400">{cert.body}</span>
                  <span className="text-xs font-semibold text-ink-700">USD {cert.costUSD.toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 lg:py-28 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge variant="amber" className="mb-4">Full ecosystem</Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              Everything you need to get certified
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-ink-800 rounded-2xl border border-ink-700 p-6 hover:border-amber-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-amber-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-ink-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-ink-900">
              Voices from the community
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="bg-white rounded-2xl border border-sand-200 p-7 flex flex-col gap-5"
              >
                <p className="text-ink-700 leading-relaxed text-sm">&ldquo;{t.quote}&rdquo;</p>
                <footer className="flex items-center gap-3 mt-auto">
                  <div className="w-9 h-9 rounded-full bg-ink-800 text-white flex items-center justify-center text-sm font-semibold shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Your certification journey starts here.
          </h2>
          <p className="text-amber-100 text-lg mb-10 max-w-xl mx-auto">
            Join MIFEA today. Create your account, set your savings goal, and take the first
            step toward a career in Islamic finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="dark" size="xl" asChild>
              <Link href="/register">
                Create your free account <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              asChild
              className="border-amber-300 text-white hover:bg-amber-400 hover:border-amber-400"
            >
              <Link href="/about">Learn more about MIFEA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
