import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, leftIcon, rightIcon, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-ink-700">
            {label}
            {props.required && <span className="text-amber-500 ml-0.5">*</span>}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <span className="absolute left-3 text-ink-400 pointer-events-none">{leftIcon}</span>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full h-11 rounded-xl border bg-white px-4 text-sm text-ink-900 placeholder:text-ink-400",
              "transition-colors duration-150",
              "border-sand-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none",
              "disabled:bg-sand-100 disabled:cursor-not-allowed disabled:text-ink-400",
              error && "border-rose-600 focus:border-rose-600 focus:ring-rose-600/20",
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center touch-target text-ink-400">
              {rightIcon}
            </span>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-xs text-rose-600 flex items-center gap-1">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="text-xs text-ink-400">
            {hint}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
