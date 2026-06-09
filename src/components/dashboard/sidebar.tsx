"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PiggyBank,
  TrendingUp,
  GraduationCap,
  CreditCard,
  Award,
  Briefcase,
  HeartHandshake,
  User,
  HelpCircle,
  LogOut,
  Bell,
  ChevronLeft,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUser, notifications } from "@/lib/mock-data";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/savings", label: "Savings", icon: PiggyBank },
  { href: "/dashboard/investment", label: "Investment", icon: TrendingUp },
  { href: "/dashboard/certifications", label: "Certifications", icon: GraduationCap },
  { href: "/dashboard/training", label: "Pay for Training", icon: CreditCard },
  { href: "/dashboard/scholarships", label: "Scholarships", icon: Award },
  { href: "/dashboard/jobs", label: "Job Placement", icon: Briefcase },
  { href: "/dashboard/support", label: "Support", icon: HeartHandshake },
];

const bottomItems = [
  { href: "/dashboard/profile", label: "Profile", icon: User },
  { href: "/dashboard/faq", label: "FAQ", icon: HelpCircle },
];

const unreadCount = notifications.filter((n) => !n.read).length;

function NavItem({
  href,
  label,
  icon: Icon,
  exact,
  collapsed,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  exact?: boolean;
  collapsed: boolean;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      title={collapsed ? label : undefined}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 group",
        isActive
          ? "bg-ink-600 text-white shadow-sm shadow-ink-600/30"
          : "text-ink-300 hover:bg-ink-800 hover:text-amber-300"
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-white" : "text-ink-500 group-hover:text-white")} />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sidebarContent = (
    <aside
      className={cn(
        "flex flex-col h-full bg-ink-900 transition-all duration-300",
        collapsed ? "w-16" : "w-60"
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-5 border-b border-ink-800 relative overflow-hidden",
          collapsed && "justify-center px-0"
        )}
        style={{
          backgroundImage: "url(/images/illustrations/pattern-tile.svg)",
          backgroundSize: "120px 120px",
        }}
      >
        <div className="absolute inset-0 bg-ink-900/85" aria-hidden />
        <div className="relative w-8 h-8 bg-ink-800 border border-ink-700 rounded-lg flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L16.5 6.5V13.5L10 18L3.5 13.5V6.5L10 2Z" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z" fill="#818cf8" />
          </svg>
        </div>
        {!collapsed && (
          <span className="relative font-display text-lg font-bold text-white tracking-tight">IFinCert</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "relative ml-auto p-1.5 rounded-lg text-ink-300 hover:text-amber-300 hover:bg-ink-800 transition-colors hidden lg:flex",
            collapsed && "ml-0"
          )}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
        {navItems.map((item) => (
          <NavItem key={item.href} {...item} collapsed={collapsed} />
        ))}
      </nav>

      {/* Bottom */}
      <div className="p-3 border-t border-ink-700 space-y-1">
        {bottomItems.map((item) => (
          <NavItem key={item.href} {...item} collapsed={collapsed} />
        ))}
        <button
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium",
            "text-ink-400 hover:bg-ink-700 hover:text-white transition-colors"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0 text-ink-500" />
          {!collapsed && <span>Sign out</span>}
        </button>
      </div>

      {/* User info */}
      {!collapsed && (
        <div className="p-3 border-t border-ink-700">
          <Link
            href="/dashboard/profile"
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-ink-700 transition-colors group"
          >
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarImage src={mockUser.avatarUrl} />
              <AvatarFallback className="text-xs">
                {mockUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{mockUser.name.split(" ")[0]} {mockUser.name.split(" ")[1]}</p>
              <p className="text-xs text-ink-500 capitalize">{mockUser.role}</p>
            </div>
          </Link>
        </div>
      )}
    </aside>
  );

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-ink-900 text-white shadow-lg"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 w-60 h-full">{sidebarContent}</div>
        </div>
      )}

      {/* Desktop */}
      <div className="hidden lg:flex h-full">{sidebarContent}</div>
    </>
  );
}

export function DashboardTopBar({ title }: { title: string }) {
  return (
    <header className="h-16 bg-white border-b border-sand-200 flex items-center justify-between px-6 shrink-0">
      <h1 className="text-lg font-semibold text-ink-900">{title}</h1>
      <div className="flex items-center gap-3">
        <Link
          href="/dashboard"
          className="relative p-2 rounded-xl text-ink-500 hover:text-ink-900 hover:bg-sand-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-ink-600 text-white text-[10px] font-bold flex items-center justify-center dot-gold-pulse">
              {unreadCount}
            </span>
          )}
        </Link>
        <Link href="/dashboard/profile">
          <Avatar className="h-8 w-8">
            <AvatarImage src={mockUser.avatarUrl} />
            <AvatarFallback className="text-xs">
              {mockUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
