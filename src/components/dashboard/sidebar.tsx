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
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useBodyScrollLock } from "@/lib/hooks";
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

type MobileNavContextValue = {
  openMobile: () => void;
};

const MobileNavContext = React.createContext<MobileNavContextValue | null>(null);

function NavItem({
  href,
  label,
  icon: Icon,
  exact,
  collapsed,
  onNavigate,
}: {
  href: string;
  label: string;
  icon: React.ElementType;
  exact?: boolean;
  collapsed: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      title={collapsed ? label : undefined}
      className={cn(
        "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-150 group min-h-[44px]",
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

function SidebarPanel({
  collapsed,
  mobile,
  onCloseMobile,
}: {
  collapsed: boolean;
  mobile?: boolean;
  onCloseMobile?: () => void;
}) {
  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-ink-900 transition-all duration-300",
        collapsed && !mobile ? "w-16" : "w-full max-w-[15rem] sm:max-w-none sm:w-60"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-4 border-b border-ink-800 relative overflow-hidden safe-top",
          collapsed && !mobile && "justify-center px-0"
        )}
        style={{
          backgroundImage: "url(/images/illustrations/pattern-tile.svg)",
          backgroundSize: "120px 120px",
        }}
      >
        <div className="absolute inset-0 bg-ink-900/85" aria-hidden />
        {mobile && onCloseMobile && (
          <button
            type="button"
            onClick={onCloseMobile}
            className="relative touch-target rounded-lg text-ink-300 hover:text-white hover:bg-ink-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        )}
        <div className="relative w-8 h-8 bg-ink-800 border border-ink-700 rounded-lg flex items-center justify-center shrink-0">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
            <path d="M10 2L16.5 6.5V13.5L10 18L3.5 13.5V6.5L10 2Z" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 6L13 8.5V11.5L10 14L7 11.5V8.5L10 6Z" fill="#818cf8" />
          </svg>
        </div>
        {(!collapsed || mobile) && (
          <span className="relative font-display text-lg font-bold text-white tracking-tight">IFinCert</span>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
        {navItems.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            collapsed={collapsed && !mobile}
            onNavigate={mobile ? onCloseMobile : undefined}
          />
        ))}
      </nav>

      <div className="p-3 border-t border-ink-700 space-y-1 safe-bottom">
        {bottomItems.map((item) => (
          <NavItem
            key={item.href}
            {...item}
            collapsed={collapsed && !mobile}
            onNavigate={mobile ? onCloseMobile : undefined}
          />
        ))}
        <button
          type="button"
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium min-h-[44px]",
            "text-ink-400 hover:bg-ink-700 hover:text-white transition-colors"
          )}
        >
          <LogOut className="h-5 w-5 shrink-0 text-ink-500" />
          {(!collapsed || mobile) && <span>Sign out</span>}
        </button>
      </div>

      {(!collapsed || mobile) && (
        <div className="p-3 border-t border-ink-700">
          <Link
            href="/dashboard/profile"
            onClick={mobile ? onCloseMobile : undefined}
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-ink-700 transition-colors group min-h-[44px]"
          >
            <Avatar className="h-8 w-8 shrink-0">
              <AvatarImage src={mockUser.avatarUrl} />
              <AvatarFallback className="text-xs">
                {mockUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {mockUser.name.split(" ")[0]} {mockUser.name.split(" ")[1]}
              </p>
              <p className="text-xs text-ink-500 capitalize">{mockUser.role}</p>
            </div>
          </Link>
        </div>
      )}
    </aside>
  );
}

function DashboardSidebarInner({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}: {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (v: boolean) => void;
}) {
  const closeMobile = React.useCallback(() => setMobileOpen(false), [setMobileOpen]);

  return (
    <>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeMobile}
            aria-hidden
          />
          <div className="relative z-10 h-full shadow-2xl">
            <SidebarPanel collapsed={collapsed} mobile onCloseMobile={closeMobile} />
          </div>
        </div>
      )}

      <div className="hidden lg:flex h-full">
        <aside
          className={cn(
            "flex flex-col h-full bg-ink-900 transition-all duration-300",
            collapsed ? "w-16" : "w-60"
          )}
        >
          <div
            className={cn(
              "flex items-center gap-3 px-4 py-4 border-b border-ink-800 relative overflow-hidden",
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
              type="button"
              onClick={() => setCollapsed(!collapsed)}
              className={cn(
                "relative ml-auto touch-target rounded-lg text-ink-300 hover:text-amber-300 hover:bg-ink-800 transition-colors",
                collapsed && "ml-0"
              )}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-hide">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} collapsed={collapsed} />
            ))}
          </nav>

          <div className="p-3 border-t border-ink-700 space-y-1">
            {bottomItems.map((item) => (
              <NavItem key={item.href} {...item} collapsed={collapsed} />
            ))}
            <button
              type="button"
              className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium min-h-[44px] text-ink-400 hover:bg-ink-700 hover:text-white transition-colors"
            >
              <LogOut className="h-5 w-5 shrink-0 text-ink-500" />
              {!collapsed && <span>Sign out</span>}
            </button>
          </div>

          {!collapsed && (
            <div className="p-3 border-t border-ink-700">
              <Link
                href="/dashboard/profile"
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-ink-700 transition-colors min-h-[44px]"
              >
                <Avatar className="h-8 w-8 shrink-0">
                  <AvatarImage src={mockUser.avatarUrl} />
                  <AvatarFallback className="text-xs">
                    {mockUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {mockUser.name.split(" ")[0]} {mockUser.name.split(" ")[1]}
                  </p>
                  <p className="text-xs text-ink-500 capitalize">{mockUser.role}</p>
                </div>
              </Link>
            </div>
          )}
        </aside>
      </div>
    </>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  useBodyScrollLock(mobileOpen);

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const openMobile = React.useCallback(() => setMobileOpen(true), []);

  return (
    <MobileNavContext.Provider value={{ openMobile }}>
      <div className="flex h-[100dvh] overflow-hidden bg-sand-50">
        <DashboardSidebarInner
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {children}
        </div>
      </div>
    </MobileNavContext.Provider>
  );
}

export function DashboardTopBar({ title }: { title: string }) {
  const mobileNav = React.useContext(MobileNavContext);

  return (
    <header className="h-14 sm:h-16 bg-white border-b border-sand-200 flex items-center justify-between px-4 sm:px-6 shrink-0 safe-top gap-3">
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <button
          type="button"
          onClick={() => mobileNav?.openMobile()}
          className="lg:hidden touch-target rounded-xl bg-ink-900 text-white shadow-md shrink-0"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-base sm:text-lg font-semibold text-ink-900 truncate">{title}</h1>
      </div>
      <div className="flex items-center gap-1 sm:gap-3 shrink-0">
        <Link
          href="/dashboard"
          className="relative touch-target rounded-xl text-ink-500 hover:text-ink-900 hover:bg-sand-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-ink-600 text-white text-[10px] font-bold flex items-center justify-center dot-gold-pulse">
              {unreadCount}
            </span>
          )}
        </Link>
        <Link href="/dashboard/profile" className="touch-target">
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
