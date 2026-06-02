import { Link, useLocation } from "react-router-dom";
import { Bell, Search, Activity } from "lucide-react";

const nav = [
  { to: "/rankings", label: "Rankings" },
  { to: "/matches", label: "Matches" },
  { to: "/players", label: "Players" },
  { to: "/tournament", label: "Tournament" },
  { to: "/about", label: "About" },
];

export function AppHeader() {
  const { pathname } = useLocation();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Activity className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Stat<span className="text-primary">Rush</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => {
            const active = pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                  active ? "bg-surface text-foreground" : "text-body hover:text-foreground hover:bg-surface/60"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-subtle md:flex">
            <Search className="h-4 w-4" />
            <input
              className="w-40 bg-transparent outline-none placeholder:text-subtle"
              placeholder="Search players…"
            />
          </div>
          <button className="rounded-md border border-border bg-surface p-2 text-body hover:text-foreground" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-bullish" aria-label="User" />
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const { pathname } = useLocation();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-4 border-t border-border bg-background/95 backdrop-blur md:hidden">
      {nav.slice(0, 4).map((n) => {
        const active = pathname.startsWith(n.to);
        return (
          <Link
            key={n.to}
            to={n.to}
            className={`py-3 text-center text-xs font-medium ${active ? "text-primary" : "text-subtle"}`}
          >
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}
