import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy | MIFEA" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">{title}</h2>
      <div className="text-ink-600 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-sm text-amber-500 font-medium mb-2">Legal</p>
        <h1 className="font-display text-4xl font-bold text-ink-900 mb-3">Privacy Policy</h1>
        <p className="text-ink-500 text-sm">Last updated: 2 June 2026 · Effective immediately</p>
      </div>

      <Section title="1. Introduction">
        <p>
          MIFEA (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your personal information and your
          right to privacy. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our platform at mifea.ng and related services.
        </p>
        <p>
          By creating an account or using the MIFEA platform, you consent to the practices
          described in this policy. If you do not agree, please do not use our services.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <p>We collect information you provide directly, including:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Name, email address, phone number, and residential address</li>
          <li>Date of birth and gender (for scholarship eligibility verification)</li>
          <li>Academic credentials, professional certifications, and career information</li>
          <li>Financial information: savings goals, investment plan details, and transaction records</li>
          <li>Documents uploaded for scholarship or C/I Support applications</li>
          <li>Avatar and profile photograph (optional)</li>
        </ul>
        <p>We also automatically collect limited technical data:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>IP address and browser type</li>
          <li>Pages visited and time spent on the platform</li>
          <li>Device information and operating system</li>
        </ul>
      </Section>

      <Section title="3. How We Use Your Information">
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Create and manage your MIFEA account</li>
          <li>Process and track savings and investment contributions</li>
          <li>Evaluate scholarship and C/I Support applications</li>
          <li>Connect you with Islamic financial institutions for job placement</li>
          <li>Send service communications (account confirmations, updates, alerts)</li>
          <li>Comply with applicable Nigerian laws and regulations</li>
          <li>Improve our platform and services through aggregated analytics</li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal information to third parties for their
          marketing purposes.
        </p>
      </Section>

      <Section title="4. Legal Basis for Processing">
        <p>Under the Nigeria Data Protection Regulation (NDPR) and applicable law, we process your data on the basis of:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li><strong>Consent</strong>: When you register and agree to this policy</li>
          <li><strong>Contract performance</strong>: To deliver the services you have signed up for</li>
          <li><strong>Legitimate interests</strong>: To improve our services and prevent fraud</li>
          <li><strong>Legal obligation</strong>: Where required by applicable law</li>
        </ul>
      </Section>

      <Section title="5. Data Sharing">
        <p>We may share your information with:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Partner Islamic financial institutions (with your consent, for job placement)</li>
          <li>Scholarship-granting bodies (for scholarship application processing)</li>
          <li>C/I Support investors (with your consent and application)</li>
          <li>Service providers who assist in platform operations, under strict confidentiality</li>
          <li>Regulatory authorities where required by law</li>
        </ul>
      </Section>

      <Section title="6. Data Retention">
        <p>
          We retain your personal data for as long as your account is active or as needed to provide
          services. If you request deletion of your account, we will delete or anonymise your
          information within 30 days, except where we are required to retain it for legal compliance
          or dispute resolution.
        </p>
      </Section>

      <Section title="7. Your Rights (NDPR)">
        <p>Under the Nigeria Data Protection Regulation, you have the right to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (right to erasure)</li>
          <li>Object to or restrict our processing of your data</li>
          <li>Data portability — receive your data in a machine-readable format</li>
          <li>Withdraw consent at any time (without affecting prior processing)</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:numerouno081@gmail.com" className="text-amber-500 hover:underline">
            numerouno081@gmail.com
          </a>
          . We will respond within 30 days.
        </p>
      </Section>

      <Section title="8. Security">
        <p>
          We implement appropriate technical and organisational measures to protect your personal
          information against unauthorised access, alteration, disclosure, or destruction. However,
          no internet transmission is 100% secure. You are responsible for keeping your account
          credentials confidential.
        </p>
      </Section>

      <Section title="9. Cookies">
        <p>
          We use essential cookies to operate the platform and analytical cookies to understand usage
          patterns. See our{" "}
          <a href="/legal/cookies" className="text-amber-500 hover:underline">Cookie Policy</a> for
          full details.
        </p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>
          We may update this policy periodically. We will notify registered users of material changes
          via email or in-app notification. Continued use of the platform after changes constitutes
          acceptance of the updated policy.
        </p>
      </Section>

      <Section title="11. Contact">
        <p>
          For privacy-related enquiries, contact our Data Protection team:
        </p>
        <address className="not-italic text-sm space-y-1">
          <p><strong>MIFEA — Data Protection</strong></p>
          <p>Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria</p>
          <p>Email: <a href="mailto:numerouno081@gmail.com" className="text-amber-500 hover:underline">numerouno081@gmail.com</a></p>
          <p>Phone: +2348126844811</p>
        </address>
      </Section>
    </div>
  );
}
