import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
import { PageHero } from "@/components/marketing/page-hero";
import { AnimatedStats } from "@/components/marketing/animated-stats";
import { certifications } from "@/lib/mock-data";
import { cn, formatNaira } from "@/lib/utils";
import { illustrations } from "@/lib/images";

export const metadata: Metadata = {
  title: "IFinCert | Islamic Finance Certification",
};

const stats = [
  { value: "₦4.5T+", label: "Global Islamic finance assets", prefix: "₦", numeric: 4.5, suffix: "T+" },
  { value: "8", label: "Accredited certifications", numeric: 8, suffix: "" },
  { value: "₦0", label: "Upfront cost with C/I Support" },
  { value: "100%", label: "Sharia-compliant models", numeric: 100, suffix: "%" },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Access",
    description:
      "Internationally accredited Islamic finance certifications from AAOIFI, CISI, and INCEIF, priced for Nigerian professionals.",
    href: "/certifications",
    cta: "View certifications",
  },
  {
    icon: TrendingUp,
    title: "Training",
    description:
      "Structured savings and investment plans help you build toward certification costs through regular contributions.",
    href: "/register",
    cta: "Start saving",
  },
  {
    icon: Award,
    title: "Impact",
    description:
      "Scholarship support, Candidate-Investor partnerships, and job placement at Nigeria's leading Islamic financial institutions.",
    href: "/register",
    cta: "Apply for support",
  },
];

const features = [
  {
    icon: Award,
    title: "Scholarship Pathways",
    description:
      "Full and partial scholarships for CIPA, CSAA, IFQ, and CIFA. Open to students and working professionals.",
  },
  {
    icon: Users,
    title: "Candidate-Investor Support",
    description:
      "Sharia-compliant Qard Hasan sponsorships where an investor funds your training and you commit to a structured service agreement.",
  },
  {
    icon: TrendingUp,
    title: "Savings & Investment Plans",
    description:
      "Set a certification goal in Naira, save monthly, and track your progress on your dashboard.",
  },
  {
    icon: Briefcase,
    title: "Job Placement",
    description:
      "Direct pathways to open roles at JAIZ, Lotus, IFNG, TAJ, AAOIFI, and other partner institutions across Nigeria.",
  },
  {
    icon: ShieldCheck,
    title: "Sharia-Compliant Funding",
    description:
      "Every financial structure on IFinCert, from savings to sponsorship, follows Islamic finance principles.",
  },
  {
    icon: BookOpen,
    title: "8 Recognised Certifications",
    description:
      "From foundation (IFQ, CPSS) to professional (CPIF, CIPA). Chart your career with globally recognised credentials.",
  },
];

export default function LandingPage() {
  const featuredCerts = certifications.slice(0, 4);

  return (
    <div className="flex flex-col bg-sand-50 text-ink-900 min-h-screen">
      <PageHero
        imageSrc={illustrations.hero}
        imageAlt="Geometric Islamic star pattern"
        minHeight="min-h-[520px] lg:min-h-[600px]"
      >
        <div className="max-w-3xl reveal">
          <Badge variant="indigo" size="md" className="mb-6">
            August 2025 cohort now open
          </Badge>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight text-ink-900">
            Islamic Finance Certifications Made Accessible
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-ink-500 leading-relaxed max-w-2xl">
            IFinCert removes the financial barriers to internationally recognised Islamic
            finance credentials through structured savings, scholarships, and ethical
            Candidate-Investor sponsorships.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link href="/register">
                Create your account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/certifications">Browse certifications</Link>
            </Button>
          </div>
        </div>
      </PageHero>

      <section className="bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <AnimatedStats stats={stats} />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-sand-50 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <Badge variant="outline" className="mb-4">How IFinCert works</Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink-900">
              Three pillars. One mission.
            </h2>
            <p className="mt-4 text-lg text-ink-500 max-w-2xl mx-auto">
              From your first contribution to certification, IFinCert supports you at every stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              const delayClass = i === 1 ? "reveal-delay-1" : i === 2 ? "reveal-delay-2" : "reveal-delay-3";
              return (
                <div
                  key={pillar.title}
                  className={cn(
                    "relative surface-card p-8 group hover:border-amber-300 reveal",
                    delayClass
                  )}
                >
                  <div className="absolute top-6 right-6 text-5xl font-display font-bold text-sand-200 select-none">
                    0{i + 1}
                  </div>
                  <div className="w-12 h-12 icon-badge-indigo flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-ink-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink-900 mb-3">{pillar.title}</h3>
                  <p className="text-ink-500 leading-relaxed text-sm mb-6">{pillar.description}</p>
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium link-gold group-hover:gap-2.5 transition-all"
                  >
                    {pillar.cta} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white border-y border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal">
            <div>
              <Badge variant="outline" className="mb-4">Internationally accredited</Badge>
              <h2 className="font-display text-4xl font-bold text-ink-900">
                Your certification pathway
              </h2>
              <p className="mt-3 text-ink-500 max-w-lg">
                From foundation to professional. Choose the credential that fits your career stage.
              </p>
            </div>
            <Button variant="outline" size="md" asChild>
              <Link href="/certifications">
                View all 8 certifications <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredCerts.map((cert) => (
              <div key={cert.code} className="surface-card card-lift p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-ink-600 bg-ink-50 border border-ink-200 px-2.5 py-1 rounded-lg">
                    {cert.code}
                  </span>
                  <span className="text-xs text-amber-600 capitalize font-medium">{cert.level}</span>
                </div>
                <h3 className="text-sm font-semibold text-ink-900 leading-snug mb-2">{cert.name}</h3>
                <p className="text-xs text-ink-500 mb-4 line-clamp-2">{cert.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-ink-400">{cert.body}</span>
                  <span className="text-xs font-semibold text-amber-600">{formatNaira(cert.costNGN)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="reveal">
              <Badge variant="amber" className="mb-4">Full ecosystem</Badge>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink-900">
                Everything you need to get certified
              </h2>
              <p className="mt-4 text-ink-500 leading-relaxed">
                IFinCert brings together savings tools, scholarship programmes, investor
                partnerships, and career placement in one platform built for Nigerian
                Islamic finance professionals.
              </p>
            </div>
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden border border-sand-200 shadow-sm reveal reveal-delay-2">
              <Image
                src={illustrations.features}
                alt="Savings and certification illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const delayClass = i % 3 === 1 ? "reveal-delay-1" : i % 3 === 2 ? "reveal-delay-2" : i % 3 === 0 && i > 0 ? "reveal-delay-3" : "";
              return (
                <div
                  key={feature.title}
                  className={cn("surface-card p-6 reveal", delayClass)}
                >
                  <div className="w-10 h-10 icon-badge-indigo flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-ink-600" />
                  </div>
                  <h3 className="text-base font-semibold text-ink-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-sand-200 relative overflow-hidden">
        <div className="absolute inset-0 pattern-overlay pointer-events-none" aria-hidden />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-ink-900 mb-4">
            Your certification journey starts here
          </h2>
          <p className="text-ink-500 text-lg mb-10 max-w-xl mx-auto">
            Create your account, set your savings goal in Naira, and take the first
            step toward a professional career in Islamic finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="xl" asChild className="btn-gold-glow text-white">
              <Link href="/register">
                Create your free account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/about">Learn more about IFinCert</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}