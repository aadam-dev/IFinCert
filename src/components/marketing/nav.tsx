"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useBodyScrollLock } from "@/lib/hooks";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/certifications", label: "Certifications" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export function MarketingNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  useBodyScrollLock(menuOpen);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 bg-white/92 backdrop-blur-md border-b border-sand-200 transition-shadow duration-300 safe-top",
        scrolled && "nav-scrolled"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0">
            <div className="w-9 h-9 bg-ink-50 border border-ink-200 rounded-xl flex items-center justify-center group-hover:glow-indigo transition-all shrink-0">
              <LogoMark />
            </div>
            <span className="font-display text-lg sm:text-xl font-bold text-ink-900 tracking-tight truncate">
              IFinCert
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px] flex items-center",
                  pathname === link.href
                    ? "text-ink-600 bg-ink-50 border border-ink-200"
                    : "text-ink-500 hover:text-ink-900 hover:bg-sand-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign in</Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden touch-target rounded-lg text-ink-600 hover:bg-sand-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-sand-200 px-4 py-4 space-y-1 safe-bottom">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "block px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center",
                pathname === link.href
                  ? "text-ink-600 bg-ink-50 border border-ink-200"
                  : "text-ink-500 hover:text-ink-900 hover:bg-sand-100"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-sand-200 flex flex-col gap-2">
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
        stroke="#6366f1"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z" fill="#6366f1" />
    </svg>
  );
}
