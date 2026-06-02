import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Savings", href: "/dashboard/savings" },
    { label: "Investment", href: "/dashboard/investment" },
    { label: "Certifications", href: "/certifications" },
    { label: "Pay for Training", href: "/dashboard/training" },
    { label: "Scholarships", href: "/dashboard/scholarships" },
    { label: "Job Placement", href: "/dashboard/jobs" },
  ],
  support: [
    { label: "C-I Support", href: "/dashboard/support" },
    { label: "FAQ", href: "/faq" },
    { label: "About MIFEA", href: "/about" },
    { label: "Contact", href: "/about#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Cookie Policy", href: "/legal/cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-ink-700 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 2L16.5 6.5V13.5L10 18L3.5 13.5V6.5L10 2Z"
                    fill="none"
                    stroke="#D4883A"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z" fill="#D4883A" />
                </svg>
              </div>
              <span className="font-display text-xl font-bold">MIFEA</span>
            </div>
            <p className="text-ink-400 text-sm leading-relaxed max-w-xs">
              Bridging the knowledge gap in Islamic finance professional certification in Nigeria —
              making world-class education accessible and affordable.
            </p>
            <p className="text-ink-500 text-xs mt-4 italic font-display">
              &ldquo;Bridging Knowledge Gap, Making Ways for Human Capital&rdquo;
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-2.5">
              <a
                href="mailto:numerouno081@gmail.com"
                className="flex items-center gap-2.5 text-sm text-ink-400 hover:text-amber-400 transition-colors group"
              >
                <Mail className="h-4 w-4 text-ink-500 group-hover:text-amber-400 transition-colors" />
                numerouno081@gmail.com
              </a>
              <a
                href="tel:+2348126844811"
                className="flex items-center gap-2.5 text-sm text-ink-400 hover:text-amber-400 transition-colors group"
              >
                <Phone className="h-4 w-4 text-ink-500 group-hover:text-amber-400 transition-colors" />
                +234 812 684 4811
              </a>
              <div className="flex items-start gap-2.5 text-sm text-ink-400">
                <MapPin className="h-4 w-4 text-ink-500 mt-0.5 shrink-0" />
                <span>Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-ink-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            © {new Date().getFullYear()} MIFEA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-ink-500 hover:text-ink-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
