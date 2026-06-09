import type { Metadata } from "next";
import Link from "next/link";
import {
  PiggyBank,
  TrendingUp,
  Award,
  Briefcase,
  Bell,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { SavingsRing } from "@/components/dashboard/savings-ring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/ui/stat-card";
import {
  mockSavings,
  mockInvestment,
  trainingCohorts,
  notifications,
} from "@/lib/mock-data";
import { formatNaira, formatPercent, percentAway } from "@/lib/utils";

export const metadata: Metadata = { title: "Dashboard" };

const unread = notifications.filter((n) => !n.read);

export default function DashboardPage() {
  const savingsPct = formatPercent(mockSavings.amountSaved, mockSavings.goalAmount);
  const investPct = formatPercent(mockInvestment.amountInvested, mockInvestment.goalAmount);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Overview" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        <div className="rounded-2xl px-7 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 border border-ink-700 text-white">
          <div>
            <p className="text-sm text-ink-300 mb-1">Good day</p>
            <h2 className="font-display text-2xl font-bold">
              Yusuf Toyeeb
            </h2>
            <p className="text-sm mt-1 text-ink-300">
              You are{" "}
              <span className="font-semibold text-amber-400">
                {percentAway(mockSavings.amountSaved, mockSavings.goalAmount)}% away
              </span>{" "}
              from your CSAA savings goal.
            </p>
          </div>
          <Button variant="gold" size="md" asChild>
            <Link href="/dashboard/savings">
              View savings plan <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Amount Saved"
            value={formatNaira(mockSavings.amountSaved)}
            subtext={`Goal: ${formatNaira(mockSavings.goalAmount)} (CSAA)`}
            icon={<PiggyBank className="h-5 w-5 text-ink-600" />}
            accent
          />
          <StatCard
            label="Amount Invested"
            value={formatNaira(mockInvestment.amountInvested)}
            subtext={`Goal: ${formatNaira(mockInvestment.goalAmount)} (CIPA)`}
            icon={<TrendingUp className="h-5 w-5 text-ink-600" />}
          />
          <StatCard
            label="Certifications"
            value="2 eligible"
            subtext="CIPA, IFQ available"
            icon={<Award className="h-5 w-5 text-ink-600" />}
          />
          <StatCard
            label="Job Openings"
            value="8 open"
            subtext="At partner institutions"
            icon={<Briefcase className="h-5 w-5 text-ink-600" />}
            trend={{ value: "New this week", positive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Savings (CSAA)</CardTitle>
                <div className="flex items-center gap-3">
                  <SavingsRing percent={savingsPct} />
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-ink-50 text-ink-600 border border-ink-200">
                    {savingsPct}% saved
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={savingsPct} showValue />
              <div className="mt-4 flex justify-between text-sm text-ink-500">
                <span>
                  Saved: <span className="font-semibold text-ink-900">{formatNaira(mockSavings.amountSaved)}</span>
                </span>
                <span>
                  Goal: <span className="font-semibold text-ink-900">{formatNaira(mockSavings.goalAmount)}</span>
                </span>
              </div>
              <p className="text-xs mt-3 font-medium text-ink-400">{mockSavings.cadence}</p>
              <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                <Link href="/dashboard/savings">Manage savings</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Investment (CIPA)</CardTitle>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  {investPct}% invested
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={investPct} showValue />
              <div className="mt-4 flex justify-between text-sm text-ink-500">
                <span>
                  Invested: <span className="font-semibold text-ink-900">{formatNaira(mockInvestment.amountInvested)}</span>
                </span>
                <span>
                  Goal: <span className="font-semibold text-ink-900">{formatNaira(mockInvestment.goalAmount)}</span>
                </span>
              </div>
              <p className="text-xs mt-3 font-medium text-ink-400">{mockInvestment.cadence}</p>
              <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                <Link href="/dashboard/investment">Manage investment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Upcoming Training</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/dashboard/training">View all</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {trainingCohorts.map((cohort) => (
                  <div
                    key={cohort.cert}
                    className="flex items-center justify-between py-3 border-b border-sand-200 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-ink-50 border border-ink-200 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-ink-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{cohort.cert}</p>
                        <p className="text-xs text-ink-400">{cohort.date}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-amber-600">
                      {formatNaira(cohort.costNGN)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-ink-600" />
                  Notifications
                  {unread.length > 0 && (
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-ink-50 text-ink-600 border border-ink-200">
                      {unread.length} new
                    </span>
                  )}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {notifications.slice(0, 5).map((n) => (
                  <div
                    key={n.id}
                    className="flex items-start gap-3 py-2 border-b border-sand-100 last:border-0"
                  >
                    <div
                      className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${n.read ? "bg-ink-300" : "bg-ink-600 dot-gold-pulse"}`}
                    />
                    <div>
                      <p className={`text-sm font-medium ${n.read ? "text-ink-400" : "text-ink-900"}`}>
                        {n.title}
                      </p>
                      <p className="text-xs mt-0.5 line-clamp-1 text-ink-400">{n.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
