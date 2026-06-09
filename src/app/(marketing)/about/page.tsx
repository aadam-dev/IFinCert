import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageHero } from "@/components/marketing/page-hero";
import { cn, formatNaira } from "@/lib/utils";
import { illustrations } from "@/lib/images";

export const metadata: Metadata = { title: "About IFinCert" };

const team = [
  {
    name: "Yusuf Toyeeb Olanrewaju",
    role: "Team Lead",
    expertise: "Islamic Finance & SDGs",
    initial: "YT",
  },
  {
    name: "Zainab Adebola Abdulrazaq",
    role: "Team Member",
    expertise: "Research & Outreach",
    initial: "ZA",
  },
  {
    name: "Imam-Fulani Muhammad",
    role: "Team Member",
    expertise: "Islamic Finance Operations",
    initial: "IM",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-sand-50 text-ink-900 min-h-screen">
      <PageHero imageSrc={illustrations.hero} imageSrcForeground={illustrations.heroForeground} imageAlt="Human capital network illustration">
        <div className="max-w-3xl">
          <Badge variant="indigo" className="mb-5 reveal reveal-delay-1">Our mission</Badge>
          <h1 className="font-display hero-heading font-bold mb-4 sm:mb-6 text-ink-950 reveal reveal-delay-2">
            Bridging knowledge gap, making ways for human capital
          </h1>
          <p className="text-ink-800 sm:text-ink-600 text-base sm:text-lg leading-relaxed reveal reveal-delay-3">
            IFinCert was born out of a recognition that Nigeria&apos;s Islamic finance sector is growing
            rapidly, yet the professionals needed to sustain that growth cannot access the
            training they need. We are changing that.
          </p>
        </div>
      </PageHero>

      <section className="page-section bg-white border-b border-sand-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="reveal">
            <Badge variant="rose" className="mb-4">The problem</Badge>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5 text-ink-900">
              A ₦4.5 trillion industry with a workforce gap
            </h2>
            <div className="space-y-4 text-ink-500 leading-relaxed">
              <p>
                The global Islamic finance industry surpassed ₦4.5 trillion in assets. Nigeria,
                home to one of Africa&apos;s largest Muslim populations, holds tremendous potential,
                yet faces a critical shortage of professionally trained Islamic finance experts.
              </p>
              <p>
                Internationally recognised certifications cost between {formatNaira(540_000)} and{" "}
                {formatNaira(3_400_000)}. For most Nigerian students and young professionals,
                these figures are out of reach.
              </p>
              <p>
                The result is limited professional capacity within Islamic banks, fintechs, and
                non-interest financial institutions, affecting product innovation, Sharia
                governance, and overall industry growth.
              </p>
            </div>
          </div>
          <div className="surface-card p-5 sm:p-8 reveal reveal-delay-2">
            <Badge variant="indigo" className="mb-4">Our solution</Badge>
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-5 text-ink-900">
              A complete ecosystem
            </h2>
            <ul className="space-y-4">
              {[
                "Structured savings and investment plans toward certification costs",
                "Full and partial scholarship programmes in partnership with institutions",
                "Candidate-Investor Support: Sharia-compliant sponsorship arrangements",
                "Direct job placement at Islamic financial institutions across Nigeria",
                "Mentorship and peer support networks",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-500">
                  <span className="mt-1 w-5 h-5 rounded-full bg-ink-50 text-ink-600 flex items-center justify-center shrink-0 text-xs font-bold border border-ink-200">✓</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section bg-sand-50 pattern-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <h2 className="font-display display-heading font-bold mb-3 text-ink-900">The team</h2>
            <p className="text-ink-500">The researchers and practitioners behind IFinCert.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={cn(
                  "surface-card p-7 text-center reveal",
                  i === 1 && "reveal-delay-1",
                  i === 2 && "reveal-delay-2"
                )}
              >
                <div className="w-16 h-16 rounded-full bg-ink-50 text-ink-600 border-2 border-ink-300 ring-2 ring-ink-100 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {member.initial}
                </div>
                <h3 className="font-semibold text-ink-900 mb-1">{member.name}</h3>
                <p className="text-sm text-amber-600 font-medium mb-1">{member.role}</p>
                <p className="text-xs text-ink-500">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="page-section bg-white border-t border-sand-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden>
          <Image src={illustrations.about} alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          <div className="reveal">
            <h2 className="font-display display-heading font-bold text-ink-900 mb-4">Get in touch</h2>
            <p className="text-ink-500 leading-relaxed mb-8">
              Interested in partnering with IFinCert as an investor, institution, or collaborator?
              We would like to hear from you.
            </p>
            <div className="space-y-4">
              <a href="mailto:numerouno081@gmail.com" className="flex items-center gap-3 text-ink-500 hover:text-ink-600 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-ink-50 border border-ink-200 flex items-center justify-center group-hover:glow-indigo transition-all">
                  <Mail className="h-4 w-4 text-ink-600" />
                </div>
                <span>numerouno081@gmail.com</span>
              </a>
              <a href="tel:+2348126844811" className="flex items-center gap-3 text-ink-500 hover:text-ink-600 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-ink-50 border border-ink-200 flex items-center justify-center group-hover:glow-indigo transition-all">
                  <Phone className="h-4 w-4 text-ink-600" />
                </div>
                <span>+234 812 684 4811</span>
              </a>
              <div className="flex items-start gap-3 text-ink-500">
                <div className="w-9 h-9 rounded-xl bg-ink-50 border border-ink-200 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-ink-600" />
                </div>
                <span>Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria</span>
              </div>
            </div>
          </div>
          <div className="surface-card p-5 sm:p-8 reveal reveal-delay-2">
            <h3 className="text-xl font-semibold text-ink-900 mb-2">Join the IFinCert network</h3>
            <p className="text-ink-500 text-sm mb-6">
              Create your free account and become part of Nigeria&apos;s growing Islamic finance
              professional community.
            </p>
            <Button variant="primary" size="lg" asChild className="w-full">
              <Link href="/register">
                Create your account <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
