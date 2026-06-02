import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-ink-700">
            {label}
            {props.required && <span className="text-amber-500 ml-0.5">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "w-full min-h-[120px] rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400",
            "transition-colors duration-150 resize-y",
            "border-sand-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none",
            "disabled:bg-sand-100 disabled:cursor-not-allowed",
            error && "border-rose-600 focus:border-rose-600 focus:ring-rose-600/20",
            className
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && <p className="text-xs text-rose-600">{error}</p>}
        {hint && !error && <p className="text-xs text-ink-400">{hint}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
