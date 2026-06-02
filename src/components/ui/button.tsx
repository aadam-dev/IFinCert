"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-amber-500 text-white hover:bg-amber-600 active:scale-[0.98] shadow-sm shadow-amber-500/20",
        secondary:
          "bg-ink-100 text-ink-800 hover:bg-ink-200 active:scale-[0.98]",
        outline:
          "border border-ink-200 bg-transparent text-ink-700 hover:bg-sand-100 active:scale-[0.98]",
        ghost:
          "bg-transparent text-ink-600 hover:bg-sand-100 hover:text-ink-900",
        dark:
          "bg-ink-800 text-white hover:bg-ink-900 active:scale-[0.98] shadow-sm",
        danger:
          "bg-rose-600 text-white hover:bg-rose-700 active:scale-[0.98]",
        sage:
          "bg-sage-600 text-white hover:bg-sage-700 active:scale-[0.98]",
        link:
          "text-amber-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        xs: "h-7 px-3 text-xs rounded-lg",
        sm: "h-9 px-4 text-sm rounded-xl",
        md: "h-11 px-5 text-sm rounded-xl",
        lg: "h-12 px-7 text-base rounded-xl",
        xl: "h-14 px-8 text-base rounded-2xl",
        icon: "h-10 w-10 rounded-xl",
        "icon-sm": "h-8 w-8 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            {children}
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
