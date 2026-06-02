import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = { title: "About MIFEA" };

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
    <div>
      {/* Hero */}
      <section className="bg-ink-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="amber" className="mb-5">Our mission</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Bridging knowledge gap,<br />
              <span className="text-amber-400">making ways</span> for human capital
            </h1>
            <p className="text-ink-300 text-lg leading-relaxed">
              MIFEA was born out of a recognition that Nigeria&apos;s Islamic finance sector is growing
              rapidly, yet the professionals needed to sustain that growth cannot access the
              training they need. We are changing that.
            </p>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <Badge variant="rose" className="mb-4">The problem</Badge>
            <h2 className="font-display text-3xl font-bold text-ink-900 mb-5">
              A USD 4.5 trillion industry — with a workforce gap
            </h2>
            <div className="space-y-4 text-ink-600 leading-relaxed">
              <p>
                The global Islamic finance industry surpassed USD 4.5 trillion in assets. Nigeria,
                home to one of Africa&apos;s largest Muslim populations, holds tremendous potential —
                yet faces a critical shortage of professionally trained Islamic finance experts.
              </p>
              <p>
                Internationally recognised certifications cost between USD 520 and USD 2,200.
                Converted to Naira, these figures are simply out of reach for most Nigerian
                students and young professionals.
              </p>
              <p>
                The result: limited professional capacity within Islamic banks, fintechs, and
                non-interest financial institutions — affecting product innovation, Sharī&apos;ah
                governance, and overall industry growth.
              </p>
            </div>
          </div>
          <div>
            <Badge variant="sage" className="mb-4">Our solution</Badge>
            <h2 className="font-display text-3xl font-bold text-ink-900 mb-5">
              A complete human capital development ecosystem
            </h2>
            <ul className="space-y-4">
              {[
                "Structured savings and investment plans toward certification costs",
                "Full and partial scholarship programmes in partnership with institutions",
                "Candidate-Investor Support: Sharī'ah-compliant sponsorship arrangements",
                "Direct job placement at Islamic financial institutions across Nigeria",
                "Community-driven mentorship and peer support networks",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-1 w-5 h-5 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center shrink-0 text-xs font-bold">✓</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-ink-900 mb-3">The team</h2>
            <p className="text-ink-500">The researchers and practitioners behind MIFEA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-sand-200 p-7 text-center">
                <div className="w-16 h-16 rounded-full bg-ink-800 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {member.initial}
                </div>
                <h3 className="font-semibold text-ink-900 mb-1">{member.name}</h3>
                <p className="text-sm text-amber-500 font-medium mb-1">{member.role}</p>
                <p className="text-xs text-ink-400">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-ink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-display text-4xl font-bold text-white mb-4">Get in touch</h2>
            <p className="text-ink-400 leading-relaxed mb-8">
              Interested in partnering with MIFEA — as an investor, institution, or collaborator?
              We&apos;d love to hear from you.
            </p>
            <div className="space-y-4">
              <a href="mailto:numerouno081@gmail.com" className="flex items-center gap-3 text-ink-300 hover:text-amber-400 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-ink-700 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  <Mail className="h-4 w-4 text-amber-400" />
                </div>
                <span>numerouno081@gmail.com</span>
              </a>
              <a href="tel:+2348126844811" className="flex items-center gap-3 text-ink-300 hover:text-amber-400 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-ink-700 flex items-center justify-center group-hover:bg-amber-500/10 transition-colors">
                  <Phone className="h-4 w-4 text-amber-400" />
                </div>
                <span>+234 812 684 4811</span>
              </a>
              <div className="flex items-start gap-3 text-ink-300">
                <div className="w-9 h-9 rounded-xl bg-ink-700 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-amber-400" />
                </div>
                <span>Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria</span>
              </div>
            </div>
          </div>
          <div className="bg-ink-800 rounded-2xl p-8 border border-ink-700">
            <h3 className="text-xl font-semibold text-white mb-2">Join the MIFEA network</h3>
            <p className="text-ink-400 text-sm mb-6">
              Create your free account and become part of Nigeria&apos;s growing Islamic finance
              professional community.
            </p>
            <Button variant="primary" size="lg" asChild className="w-full">
              <Link href="/register">
                Create your account <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
