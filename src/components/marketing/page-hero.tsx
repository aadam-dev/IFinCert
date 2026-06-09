import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  minHeight?: string;
}

export function PageHero({
  imageSrc,
  imageAlt,
  children,
  className,
  align = "left",
  minHeight = "min-h-[420px]",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "hero-backdrop relative border-b border-sand-200",
        minHeight,
        className
      )}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 pattern-overlay pointer-events-none" aria-hidden />
      <div
        className={cn(
          "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32",
          align === "center" && "text-center"
        )}
      >
        {children}
      </div>
    </section>
  );
}
