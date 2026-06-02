"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GraduationCap, Briefcase, Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { UserRole } from "@/types";

type Step = "role" | "details";

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = React.useState<Step>("role");
  const [role, setRole] = React.useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleRoleSelect = (r: UserRole) => {
    setRole(r);
    setStep("details");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-md">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {(["role", "details"] as Step[]).map((s, i) => (
          <React.Fragment key={s}>
            <div
              className={cn(
                "w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
                step === s || (s === "role" && step === "details")
                  ? "bg-amber-500 text-white"
                  : "bg-sand-200 text-ink-400"
              )}
            >
              {i + 1}
            </div>
            {i < 1 && <div className={cn("flex-1 h-0.5 rounded-full", step === "details" ? "bg-amber-500" : "bg-sand-200")} />}
          </React.Fragment>
        ))}
      </div>

      {step === "role" ? (
        <>
          <h1 className="font-display text-3xl font-bold text-ink-900 mb-2">
            Create your account
          </h1>
          <p className="text-ink-500 mb-8">
            Choose your registration type to get started.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <RoleCard
              icon={GraduationCap}
              title="Student"
              description="Currently enrolled or recently graduated"
              selected={role === "student"}
              onClick={() => handleRoleSelect("student")}
            />
            <RoleCard
              icon={Briefcase}
              title="Non-Student"
              description="Working professional or practitioner"
              selected={role === "non-student"}
              onClick={() => handleRoleSelect("non-student")}
            />
          </div>

          <p className="text-center text-sm text-ink-500 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-500 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </>
      ) : (
        <>
          <button
            onClick={() => setStep("role")}
            className="text-sm text-ink-400 hover:text-ink-700 transition-colors mb-6 flex items-center gap-1"
          >
            ← Back
          </button>
          <h1 className="font-display text-3xl font-bold text-ink-900 mb-1">
            Your details
          </h1>
          <p className="text-ink-500 mb-8">
            Registering as{" "}
            <span className="text-amber-500 font-medium capitalize">{role}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Full name" name="name" placeholder="Yusuf Toyeeb Olanrewaju" required autoComplete="name" />
            <Input
              label="Email address"
              name="email"
              type="email"
              placeholder="you@gmail.com"
              required
              autoComplete="email"
            />
            <Input
              label="Phone number"
              name="phone"
              type="tel"
              placeholder="+234 812 000 0000"
              required
              autoComplete="tel"
            />
            <div className="relative">
              <Input
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
                required
                minLength={8}
                hint="At least 8 characters with one number"
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-ink-400 hover:text-ink-700 transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                }
              />
            </div>

            <div className="pt-2">
              <p className="text-xs text-ink-400 mb-4">
                By creating an account, you agree to our{" "}
                <Link href="/legal/terms" className="text-amber-500 hover:underline">Terms & Conditions</Link>
                {" "}and{" "}
                <Link href="/legal/privacy" className="text-amber-500 hover:underline">Privacy Policy</Link>.
              </p>
              <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
                Create account <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </form>

          <p className="text-center text-sm text-ink-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-500 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </>
      )}
    </div>
  );
}

function RoleCard({
  icon: Icon,
  title,
  description,
  selected,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-start gap-3 p-5 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer w-full",
        selected
          ? "border-amber-500 bg-amber-50"
          : "border-sand-200 bg-white hover:border-amber-200 hover:bg-sand-50"
      )}
    >
      <div
        className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center transition-colors",
          selected ? "bg-amber-500 text-white" : "bg-sand-100 text-ink-500"
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className={cn("font-semibold text-sm", selected ? "text-amber-600" : "text-ink-900")}>
          {title}
        </p>
        <p className="text-xs text-ink-400 mt-0.5 leading-snug">{description}</p>
      </div>
    </button>
  );
}
