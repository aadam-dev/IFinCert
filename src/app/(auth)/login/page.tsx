"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-sm">
      <h1 className="font-display text-3xl font-bold text-ink-950 mb-2">Welcome back</h1>
      <p className="text-ink-600 mb-8">Sign in to your IFinCert account.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email address"
          name="email"
          type="email"
          placeholder="you@gmail.com"
          required
          autoComplete="email"
        />
        <Input
          label="Password"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Your password"
          required
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-ink-500 hover:text-ink-900 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
        />

        <div className="flex items-center justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-amber-600 hover:text-amber-700 hover:underline transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full mt-2" loading={loading}>
          Sign in <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </form>

      <p className="text-center text-sm text-ink-600 mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-amber-600 font-medium hover:text-amber-700 hover:underline transition-colors">
          Create one free
        </Link>
      </p>
    </div>
  );
}
