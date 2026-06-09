import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  imageSrc: string;
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  minHeight?: string;
  contentClassName?: string;
}

export function PageHero({
  imageSrc,
  imageAlt,
  children,
  className,
  align = "left",
  minHeight = "min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]",
  contentClassName,
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
        className="object-cover object-[80%_15%] opacity-35 sm:object-center sm:opacity-70 lg:opacity-100"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 pattern-overlay pointer-events-none opacity-0 sm:opacity-100"
        aria-hidden
      />
      <div
        className={cn(
          "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28",
          align === "center" && "text-center"
        )}
      >
        <div
          className={cn(
            "hero-content",
            align === "center" && "mx-auto max-w-3xl",
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
