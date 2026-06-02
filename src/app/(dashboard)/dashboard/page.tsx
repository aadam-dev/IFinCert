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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
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

        {/* Welcome banner */}
        <div className="bg-ink-800 rounded-2xl px-7 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-ink-400 text-sm mb-1">Good day 👋</p>
            <h2 className="text-white font-display text-2xl font-bold">Yusuf Toyeeb</h2>
            <p className="text-ink-400 text-sm mt-1">
              You are <span className="text-amber-400 font-semibold">{percentAway(mockSavings.amountSaved, mockSavings.goalAmount)}% away</span> from your CSAA savings goal.
            </p>
          </div>
          <Button variant="primary" size="md" asChild>
            <Link href="/dashboard/savings">View savings plan <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="Amount Saved"
            value={formatNaira(mockSavings.amountSaved)}
            subtext={`Goal: ${formatNaira(mockSavings.goalAmount)} (CSAA)`}
            icon={<PiggyBank className="h-5 w-5" />}
            accent
          />
          <StatCard
            label="Amount Invested"
            value={formatNaira(mockInvestment.amountInvested)}
            subtext={`Goal: ${formatNaira(mockInvestment.goalAmount)} (CIPA)`}
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <StatCard
            label="Certifications"
            value="2 eligible"
            subtext="CIPA, IFQ available"
            icon={<Award className="h-5 w-5" />}
          />
          <StatCard
            label="Job Openings"
            value="8 open"
            subtext="At partner institutions"
            icon={<Briefcase className="h-5 w-5" />}
            trend={{ value: "New this week", positive: true }}
          />
        </div>

        {/* Progress section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Savings — CSAA</CardTitle>
                <Badge variant="amber">{savingsPct}% saved</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={savingsPct} showValue />
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-ink-500">Saved: <span className="font-semibold text-ink-800">{formatNaira(mockSavings.amountSaved)}</span></span>
                <span className="text-ink-500">Goal: <span className="font-semibold text-ink-800">{formatNaira(mockSavings.goalAmount)}</span></span>
              </div>
              <p className="text-xs text-ink-400 mt-3 font-medium">{mockSavings.cadence}</p>
              <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                <Link href="/dashboard/savings">Manage savings</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Investment — CIPA</CardTitle>
                <Badge variant="default">{investPct}% invested</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={investPct} colorClass="bg-ink-700" showValue />
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-ink-500">Invested: <span className="font-semibold text-ink-800">{formatNaira(mockInvestment.amountInvested)}</span></span>
                <span className="text-ink-500">Goal: <span className="font-semibold text-ink-800">{formatNaira(mockInvestment.goalAmount)}</span></span>
              </div>
              <p className="text-xs text-ink-400 mt-3 font-medium">{mockInvestment.cadence}</p>
              <Button variant="outline" size="sm" className="mt-4 w-full" asChild>
                <Link href="/dashboard/investment">Manage investment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming training + notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Upcoming training */}
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
              <div className="space-y-3">
                {trainingCohorts.map((cohort) => (
                  <div
                    key={cohort.cert}
                    className="flex items-center justify-between py-3 border-b border-sand-100 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-amber-100 rounded-xl flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-ink-900">{cohort.cert}</p>
                        <p className="text-xs text-ink-400">{cohort.date}</p>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-ink-700">{formatNaira(cohort.costNGN)}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-amber-500" />
                  Notifications
                  {unread.length > 0 && (
                    <Badge variant="amber" size="sm">{unread.length} new</Badge>
                  )}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.slice(0, 5).map((n) => (
                  <div
                    key={n.id}
                    className="flex items-start gap-3 py-2 border-b border-sand-50 last:border-0"
                  >
                    <div className={`mt-1 w-2 h-2 rounded-full shrink-0 ${n.read ? "bg-ink-200" : "bg-amber-500"}`} />
                    <div>
                      <p className={`text-sm font-medium ${n.read ? "text-ink-600" : "text-ink-900"}`}>
                        {n.title}
                      </p>
                      <p className="text-xs text-ink-400 mt-0.5 line-clamp-1">{n.message}</p>
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
