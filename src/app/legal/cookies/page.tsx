import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Cookie Policy | MIFEA" };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl font-bold text-ink-900 mb-4">{title}</h2>
      <div className="text-ink-600 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

const cookieTypes = [
  {
    name: "Strictly Necessary",
    purpose: "Authentication, session management, security",
    examples: "Login session token, CSRF protection",
    canOptOut: false,
  },
  {
    name: "Functional",
    purpose: "Remembering preferences (sidebar collapsed state, theme)",
    examples: "UI preference cookies",
    canOptOut: true,
  },
  {
    name: "Analytical",
    purpose: "Understanding how users navigate the platform to improve it",
    examples: "Page views, feature usage (anonymised)",
    canOptOut: true,
  },
];

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <p className="text-sm text-amber-500 font-medium mb-2">Legal</p>
        <h1 className="font-display text-4xl font-bold text-ink-900 mb-3">Cookie Policy</h1>
        <p className="text-ink-500 text-sm">Last updated: 2 June 2026</p>
      </div>

      <Section title="1. What Are Cookies?">
        <p>
          Cookies are small text files stored on your device when you visit a website. They help the
          site remember information about your visit — such as your login status and preferences —
          making your next visit easier and the site more useful to you.
        </p>
      </Section>

      <Section title="2. How MIFEA Uses Cookies">
        <p>We use cookies to:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Keep you signed in during your session</li>
          <li>Remember your interface preferences (e.g., sidebar state)</li>
          <li>Protect the platform from cross-site request forgery (CSRF)</li>
          <li>Collect anonymised usage data to improve platform features</li>
        </ul>
        <p>
          We do <strong>not</strong> use advertising or tracking cookies, and we do not share
          cookie data with third-party advertisers.
        </p>
      </Section>

      <Section title="3. Types of Cookies We Use">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-sand-200">
                <th className="text-left py-3 pr-4 text-ink-700 font-semibold">Type</th>
                <th className="text-left py-3 pr-4 text-ink-700 font-semibold">Purpose</th>
                <th className="text-left py-3 pr-4 text-ink-700 font-semibold">Examples</th>
                <th className="text-left py-3 text-ink-700 font-semibold">Opt-out</th>
              </tr>
            </thead>
            <tbody>
              {cookieTypes.map((c) => (
                <tr key={c.name} className="border-b border-sand-100">
                  <td className="py-3 pr-4 font-medium text-ink-900">{c.name}</td>
                  <td className="py-3 pr-4 text-ink-500">{c.purpose}</td>
                  <td className="py-3 pr-4 text-ink-500">{c.examples}</td>
                  <td className="py-3">
                    {c.canOptOut ? (
                      <span className="text-sage-600 font-medium">Yes</span>
                    ) : (
                      <span className="text-rose-600 font-medium">Required</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="4. Managing Cookies">
        <p>
          You can control and delete cookies through your browser settings. Note that disabling
          strictly necessary cookies will prevent you from logging in and using authenticated features.
        </p>
        <p>Browser-specific guidance:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-sm">
          <li>Chrome: Settings → Privacy and security → Cookies</li>
          <li>Safari: Settings → Safari → Privacy & Security</li>
          <li>Firefox: Settings → Privacy & Security → Cookies</li>
          <li>Edge: Settings → Cookies and site permissions</li>
        </ul>
      </Section>

      <Section title="5. Updates to This Policy">
        <p>
          We may update this Cookie Policy as our platform evolves. Changes take effect immediately
          upon posting. Your continued use of the Platform constitutes acceptance of the updated policy.
        </p>
      </Section>

      <Section title="6. Contact">
        <p>
          For questions about our use of cookies, contact us at{" "}
          <a href="mailto:numerouno081@gmail.com" className="text-amber-500 hover:underline">
            numerouno081@gmail.com
          </a>
          . See also our{" "}
          <Link href="/legal/privacy" className="text-amber-500 hover:underline">Privacy Policy</Link>.
        </p>
      </Section>
    </div>
  );
}
