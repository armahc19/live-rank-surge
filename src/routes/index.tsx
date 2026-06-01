import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Activity, TrendingUp, Flame, BarChart3, Zap } from "lucide-react";
import { players } from "@/lib/statrush-data";
import { TrendBadge } from "@/components/statrush/Trend";
import { AppHeader } from "@/components/statrush/AppHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StatRush — Real-Time Football Rankings" },
      { name: "description", content: "The stock market for football players. Live World Cup rankings, Impact Scores, and market movers." },
      { property: "og:title", content: "StatRush — Real-Time Football Rankings" },
      { property: "og:description", content: "Track every player. Watch rankings change live. See who dominates the tournament." },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 -z-10 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, oklch(0.4 0.18 250 / 0.5), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.5 0.2 152 / 0.4), transparent 45%)" }} />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div className="flex flex-col justify-center">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-body backdrop-blur">
              <span className="live-dot" /> Live World Cup 2026 · 32 Teams · 736 Players
            </span>
            <h1 className="text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              One board.<br />One tournament.<br />
              <span className="bg-gradient-to-r from-primary via-bullish to-hot bg-clip-text text-transparent">All players.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-body">
              Real-time football rankings powered by match impact. Track every player. Watch rankings change live. See who dominates the tournament.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/rankings" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary transition hover:brightness-110">
                View Live Rankings <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/players" className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-hover">
                Explore Players
              </Link>
            </div>
          </div>

          {/* Floating leaderboard preview */}
          <div className="relative">
            <div className="glass rounded-2xl p-5 shadow-card">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="live-dot" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-bullish">Live Top 5</span>
                </div>
                <span className="text-xs text-subtle">Impact Score</span>
              </div>
              <ul className="space-y-2">
                {players.slice(0, 5).map((p) => (
                  <li key={p.rank} className="flex items-center gap-3 rounded-lg bg-surface/70 p-3 row-hover">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-bold ${p.rank <= 3 ? "bg-gold text-background" : "bg-bg-secondary text-body"}`}>
                      {p.rank}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="truncate text-sm font-semibold">{p.player}</div>
                      <div className="text-xs text-subtle">{p.flag} {p.team}</div>
                    </div>
                    <div className="num text-lg font-bold">{p.score.toFixed(1)}</div>
                    <TrendBadge trend={p.trend} value={p.trendValue} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-full bg-primary/20 blur-3xl lg:block" />
            <div className="absolute -bottom-8 -left-8 hidden h-40 w-40 rounded-full bg-bullish/20 blur-3xl lg:block" />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Activity, title: "Live Rankings", desc: "See rankings update as matches happen." },
            { icon: BarChart3, title: "Impact Score", desc: "Unique tournament-wide player rating." },
            { icon: TrendingUp, title: "Market Movers", desc: "Track biggest risers and fallers." },
            { icon: Flame, title: "Momentum Meter", desc: "Visualize player form instantly." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-surface p-6 row-hover">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-1 text-sm text-body">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <Zap className="mx-auto h-8 w-8 text-hot" />
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">The stock market for football players.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-body">
            Every tackle, pass, save and goal moves a player up or down the board. Refresh, react, and ride the momentum.
          </p>
          <Link to="/rankings" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground glow-primary">
            Open the live board <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border bg-bg-secondary/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-subtle sm:px-6">
          <div className="font-bold text-foreground">Stat<span className="text-primary">Rush</span></div>
          <nav className="flex flex-wrap gap-5">
            <Link to="/rankings">Rankings</Link>
            <Link to="/players">Players</Link>
            <Link to="/tournament">Tournament</Link>
            <Link to="/about">About</Link>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
