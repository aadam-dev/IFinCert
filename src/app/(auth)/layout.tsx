import Link from "next/link";
import Image from "next/image";
import { marketingImages } from "@/lib/images";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-sand-50 text-ink-900 flex flex-col relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <Image
          src={marketingImages.auth}
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
        />
        <div className="absolute inset-0 pattern-overlay" />
      </div>

      <header className="relative z-10 py-5 px-6">
        <Link href="/" className="flex items-center gap-3 w-fit group">
          <div className="w-8 h-8 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-100 transition-colors">
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L16.5 6.5V13.5L10 18L3.5 13.5V6.5L10 2Z" fill="none" stroke="#059669" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z" fill="#059669" />
            </svg>
          </div>
          <span className="font-display text-xl font-bold text-ink-950 tracking-tight">IFinCert</span>
        </Link>
      </header>

      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-6 sm:py-10">
        <div className="w-full max-w-md surface-card p-5 sm:p-8">
          {children}
        </div>
      </main>

      <footer className="relative z-10 py-6 px-6 text-center border-t border-sand-200 bg-white/60 space-y-1.5">
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} IFinCert.
        </p>
        <p className="text-xs text-ink-400">
          powered by{" "}
          <a
            href="https://aadamdev.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink-700 transition-colors"
          >
            aadam
          </a>
        </p>
      </footer>
    </div>
  );
}
