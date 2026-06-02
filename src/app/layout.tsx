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
    default: "MIFEA — Making Islamic Finance Education Accessible",
    template: "%s | MIFEA",
  },
  description:
    "Bridging the knowledge gap in Islamic finance professional certification in Nigeria. Access savings plans, scholarships, training programmes, and career opportunities.",
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
  ],
  authors: [{ name: "MIFEA Team" }],
  creator: "MIFEA",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://mifea.ng",
    siteName: "MIFEA",
    title: "MIFEA — Making Islamic Finance Education Accessible",
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
