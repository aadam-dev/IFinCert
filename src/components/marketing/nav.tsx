"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/certifications", label: "Certifications" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function MarketingNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-ink-900 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-ink-800 transition-colors">
              <LogoMark />
            </div>
            <span className="font-display text-xl font-bold text-ink-900 tracking-tight">
              MIFEA
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "text-ink-900 bg-sand-100"
                    : "text-ink-500 hover:text-ink-900 hover:bg-sand-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-ink-600 hover:bg-sand-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sand-100 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-ink-900 bg-sand-100"
                  : "text-ink-500 hover:text-ink-900 hover:bg-sand-50"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-sand-100 flex flex-col gap-2">
            <Button variant="outline" size="md" asChild className="w-full">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button variant="primary" size="md" asChild className="w-full">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2L16.5 6.5V13.5L10 18L3.5 13.5V6.5L10 2Z"
        fill="none"
        stroke="#D4883A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z"
        fill="#D4883A"
      />
    </svg>
  );
}
