import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "IFinCert — Islamic Finance Certification Accelerator",
    template: "%s | IFinCert",
  },
  description:
    "Bridging the knowledge gap in Islamic finance professional certification in Nigeria. Access structured savings, scholarships, Candidate-Investor partnerships, and career placement.",
  keywords: [
    "Islamic finance",
    "AAOIFI",
    "CIPA",
    "CSAA",
    "IFQ",
    "Nigeria",
    "certification",
    "halal finance",
    "scholarship",
    "IFinCert",
  ],
  authors: [{ name: "IFinCert Team" }],
  creator: "IFinCert",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://ifincert.ng",
    siteName: "IFinCert",
    title: "IFinCert — Islamic Finance Certification Accelerator",
    description:
      "Bridging the knowledge gap in Islamic finance professional certification in Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
