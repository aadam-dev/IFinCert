import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        default:  "bg-sand-100 text-ink-700",
        indigo:   "bg-ink-100 text-ink-600 border border-ink-200",
        amber:    "bg-amber-100 text-amber-700 border border-amber-200",
        sage:     "bg-sage-100 text-sage-600",
        rose:     "bg-rose-100 text-rose-600",
        ink:      "bg-ink-900 text-white",
        outline:  "border border-sand-200 text-ink-600 bg-transparent",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
