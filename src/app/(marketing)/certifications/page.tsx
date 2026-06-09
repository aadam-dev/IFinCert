import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { CertLevelFilter } from "@/components/marketing/cert-level-filter";
import { certifications } from "@/lib/mock-data";
import { illustrations } from "@/lib/images";

export const metadata: Metadata = { title: "Certifications" };

export default function CertificationsPage() {
  return (
    <div className="bg-sand-50 text-ink-900 min-h-screen">
      <PageHero
        imageSrc={illustrations.certifications}
        imageAlt="Scholar studying Islamic finance"
      >
        <div className="reveal">
          <Badge variant="indigo" className="mb-4">AAOIFI · CISI · INCEIF · CIFE</Badge>
          <h1 className="font-display hero-heading font-bold text-ink-950 mb-4">
            Islamic Finance Certifications
          </h1>
          <p className="text-ink-800 sm:text-ink-600 text-base sm:text-lg max-w-2xl leading-relaxed">
            Eight internationally accredited credentials, from foundational knowledge to chartered
            professional status. IFinCert makes every one of them financially reachable for Nigerians.
          </p>
        </div>
      </PageHero>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CertLevelFilter certifications={certifications} />

          <div className="mt-12 surface-card p-5 sm:p-8 text-center reveal">
            <h2 className="font-display text-2xl font-bold text-ink-900 mb-3">
              Not sure which to start with?
            </h2>
            <p className="text-ink-500 mb-6 max-w-lg mx-auto text-sm">
              Create your IFinCert account and get a personalised pathway recommendation based on
              your background and career goals.
            </p>
            <Button variant="primary" size="lg" asChild className="btn-gold-glow text-white">
              <Link href="/register">Get started free</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
