import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sand-50 flex flex-col">
      <header className="py-5 px-6">
        <Link href="/" className="flex items-center gap-3 w-fit">
          <div className="w-8 h-8 bg-ink-900 rounded-xl flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L16.5 6.5V13.5L10 18L3.5 13.5V6.5L10 2Z" fill="none" stroke="#D4883A" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z" fill="#D4883A" />
            </svg>
          </div>
          <span className="font-display text-xl font-bold text-ink-900">MIFEA</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-10">
        {children}
      </main>
      <footer className="py-4 px-6 text-center">
        <p className="text-xs text-ink-400">
          © {new Date().getFullYear()} MIFEA.{" "}
          <Link href="/legal/privacy" className="hover:text-ink-700 underline underline-offset-2">Privacy</Link>
          {" · "}
          <Link href="/legal/terms" className="hover:text-ink-700 underline underline-offset-2">Terms</Link>
        </p>
      </footer>
    </div>
  );
}
