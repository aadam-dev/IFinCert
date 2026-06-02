import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Footer } from "@/components/marketing/footer";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="bg-white border-b border-sand-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-ink-500 hover:text-ink-900 transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to MIFEA
          </Link>
          <Link href="/" className="font-display text-lg font-bold text-ink-900">MIFEA</Link>
          <div className="flex gap-4 text-xs text-ink-400">
            <Link href="/legal/privacy" className="hover:text-ink-700">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-ink-700">Terms</Link>
            <Link href="/legal/cookies" className="hover:text-ink-700">Cookies</Link>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-white">{children}</main>
      <Footer />
    </>
  );
}
