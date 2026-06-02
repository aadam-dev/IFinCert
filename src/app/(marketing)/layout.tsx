import { MarketingNav } from "@/components/marketing/nav";
import { Footer } from "@/components/marketing/footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MarketingNav />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}
