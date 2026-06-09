"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface PageHeroProps {
  imageSrc: string; // Background image
  imageSrcForeground?: string; // Optional foreground image for parallax
  imageAlt: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  minHeight?: string;
  contentClassName?: string;
}

export function PageHero({
  imageSrc,
  imageSrcForeground,
  imageAlt,
  children,
  className,
  align = "left",
  minHeight = "min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]",
  contentClassName,
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const foregroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !backgroundRef.current) return;

      const scrollY = window.scrollY;
      const heroTop = heroRef.current.offsetTop;
      const heroHeight = heroRef.current.offsetHeight;

      // Only apply parallax when the hero is in or near the viewport
      if (scrollY + window.innerHeight > heroTop && scrollY < heroTop + heroHeight) {
        const offset = (scrollY - heroTop) * 0.15; // Adjust parallax speed
        backgroundRef.current.style.transform = `translateY(${offset}px) scale(1.05)`;
        if (foregroundRef.current) {
          const foregroundOffset = (scrollY - heroTop) * -0.1;
          foregroundRef.current.style.transform = `translateY(${foregroundOffset}px) scale(1.02)`;
        }
      } else {
        // Reset transform when out of view to avoid layout shifts or weird states
        backgroundRef.current.style.transform = `translateY(0px) scale(1.05)`;
        if (foregroundRef.current) {
          foregroundRef.current.style.transform = `translateY(0px) scale(1.02)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className={cn(
        "hero-backdrop relative border-b border-sand-200",
        minHeight,
        className
      )}
    >
      <div ref={backgroundRef} className="parallax-background">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-[80%_15%] opacity-35 sm:object-center sm:opacity-70 lg:opacity-100"
          sizes="100vw"
        />
      </div>
      {imageSrcForeground && (
        <div ref={foregroundRef} className="parallax-foreground">
          <Image
            src={imageSrcForeground}
            alt={`${imageAlt} foreground`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
      <div
        className="absolute inset-0 pointer-events-none opacity-0"
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
