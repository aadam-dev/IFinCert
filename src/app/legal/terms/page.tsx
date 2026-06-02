import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions | MIFEA" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">{title}</h2>
      <div className="text-ink-600 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-sm text-amber-500 font-medium mb-2">Legal</p>
        <h1 className="font-display text-4xl font-bold text-ink-900 mb-3">Terms & Conditions</h1>
        <p className="text-ink-500 text-sm">Last updated: 2 June 2026 · Effective immediately</p>
      </div>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using the MIFEA platform (&ldquo;Platform&rdquo;), you agree to be bound by these
          Terms and Conditions. If you do not agree to all terms, you must not use the Platform.
          These terms constitute a legally binding agreement between you and MIFEA.
        </p>
      </Section>

      <Section title="2. Description of Service">
        <p>MIFEA provides:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>A savings and investment tracking platform for Islamic finance certification goals</li>
          <li>A scholarship application portal for full and partial certification funding</li>
          <li>Candidate-Investor Support programme facilitation</li>
          <li>Training programme registration and payment coordination</li>
          <li>Job placement services connecting users with partner Islamic financial institutions</li>
        </ul>
        <p>
          MIFEA is not a licensed financial institution, bank, or investment manager. We are a
          human capital development platform that facilitates savings tracking and institutional
          connections.
        </p>
      </Section>

      <Section title="3. Account Registration">
        <p>
          To use the Platform, you must create an account with accurate, current, and complete
          information. You are responsible for maintaining the confidentiality of your credentials
          and for all activities under your account. You must be at least 18 years of age to
          register.
        </p>
        <p>
          You agree to notify us immediately of any unauthorised use of your account at{" "}
          <a href="mailto:numerouno081@gmail.com" className="text-amber-500 hover:underline">
            numerouno081@gmail.com
          </a>.
        </p>
      </Section>

      <Section title="4. Savings and Investment Plans">
        <p>
          The savings and investment figures on MIFEA are for tracking and goal-setting purposes only.
          MIFEA does not hold, manage, or guarantee your funds. Transfers made to FINACCESS bank
          accounts or MIFEA wallets are subject to the terms of those respective financial institutions.
        </p>
        <p>
          MIFEA makes no representation as to investment returns or savings outcomes. You bear full
          responsibility for your financial decisions.
        </p>
      </Section>

      <Section title="5. Scholarship Applications">
        <p>
          Submitting a scholarship application does not guarantee selection. All applications are
          reviewed on merit by the relevant scholarship committee. MIFEA reserves the right to
          disqualify applications that contain false, misleading, or incomplete information.
        </p>
        <p>
          Scholarship funds, where awarded, are disbursed directly to the certification body or
          training institution and are not payable as cash to the applicant.
        </p>
      </Section>

      <Section title="6. Candidate-Investor (C/I) Support">
        <p>
          The C/I Support programme connects candidates with private investors under a Sharī'ah-
          compliant Qard Hasan or service-agreement structure. MIFEA facilitates the connection but
          is not a party to the agreement between the candidate and the investor.
        </p>
        <p>
          Candidates enrolled in C/I Support are bound by the compulsory internship agreement with
          their sponsoring organisation. Breach of this agreement may result in partial or full
          repayment obligations as stipulated in the individual C/I agreement.
        </p>
      </Section>

      <Section title="7. Prohibited Uses">
        <p>You agree not to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Submit false or misleading information in any application</li>
          <li>Attempt to manipulate the savings or investment tracking system</li>
          <li>Use the Platform for any unlawful purpose</li>
          <li>Impersonate another person or entity</li>
          <li>Interfere with the normal operation of the Platform</li>
          <li>Share your account credentials with third parties</li>
        </ul>
      </Section>

      <Section title="8. Intellectual Property">
        <p>
          All content on the MIFEA Platform — including text, design, graphics, and code — is the
          property of MIFEA or its licensors and is protected by applicable intellectual property
          laws. You may not reproduce, distribute, or create derivative works without our express
          written consent.
        </p>
      </Section>

      <Section title="9. Disclaimers">
        <p>
          The Platform is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind. MIFEA
          does not warrant that the Platform will be error-free, uninterrupted, or free of harmful
          components. Certification costs listed are indicative and subject to change by the issuing
          bodies.
        </p>
      </Section>

      <Section title="10. Limitation of Liability">
        <p>
          To the maximum extent permitted by Nigerian law, MIFEA shall not be liable for any
          indirect, incidental, consequential, or punitive damages arising from your use of the
          Platform, including but not limited to loss of savings, failed scholarship applications,
          or unsuccessful job placements.
        </p>
      </Section>

      <Section title="11. Termination">
        <p>
          We may suspend or terminate your account at any time for violation of these Terms. You may
          delete your account at any time by contacting us. Upon termination, your right to access
          the Platform ceases immediately, though certain provisions of these Terms survive
          termination.
        </p>
      </Section>

      <Section title="12. Governing Law">
        <p>
          These Terms are governed by the laws of the Federal Republic of Nigeria. Disputes shall
          be resolved in the courts of Kwara State, Nigeria, or through arbitration as mutually agreed.
        </p>
      </Section>

      <Section title="13. Contact">
        <address className="not-italic text-sm space-y-1">
          <p><strong>MIFEA Legal</strong></p>
          <p>Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria</p>
          <p>Email: <a href="mailto:numerouno081@gmail.com" className="text-amber-500 hover:underline">numerouno081@gmail.com</a></p>
        </address>
      </Section>
    </div>
  );
}
