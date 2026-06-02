"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <div className="w-full max-w-sm">
      {sent ? (
        <div className="text-center">
          <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <span className="text-2xl">✉️</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-ink-900 mb-2">Check your email</h1>
          <p className="text-ink-500 text-sm mb-6">
            We&apos;ve sent a password reset link to your email address.
          </p>
          <Button variant="outline" size="md" asChild className="w-full">
            <Link href="/login">Back to sign in</Link>
          </Button>
        </div>
      ) : (
        <>
          <h1 className="font-display text-3xl font-bold text-ink-900 mb-2">Reset password</h1>
          <p className="text-ink-500 mb-8 text-sm">
            Enter your email and we&apos;ll send you a reset link.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input label="Email address" name="email" type="email" placeholder="you@gmail.com" required />
            <Button type="submit" variant="primary" size="lg" className="w-full" loading={loading}>
              Send reset link <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
          <p className="text-center text-sm text-ink-500 mt-6">
            Remember your password?{" "}
            <Link href="/login" className="text-amber-500 font-medium hover:underline">Sign in</Link>
          </p>
        </>
      )}
    </div>
  );
}
