import { Flame } from "lucide-react";
import { PageShell } from "@/components/statrush/PageShell";
import { Leaderboard } from "@/components/statrush/Leaderboard";
import { MarketMovers } from "@/components/statrush/MarketMovers";
import { players } from "@/lib/statrush-data";

export default function Rankings() {
  const top = players[0];
  return (
    <PageShell>
      <section className="mb-6 overflow-hidden rounded-2xl border border-border bg-surface-grad p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">FIFA World Cup 2026</div>
            <h1 className="mt-1 text-3xl font-bold sm:text-4xl">Tournament In Progress</h1>
            <p className="mt-1 text-sm text-body">June 11 – July 19, 2026 · 32 Teams · 736 Players</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-bullish/30 bg-bullish/10 px-3 py-1.5 text-xs font-semibold text-bullish">
            <span className="live-dot" /> LIVE UPDATES
          </span>
        </div>
      </section>

      <section className="mb-6 rounded-2xl border border-hot/30 bg-gradient-to-br from-hot/10 via-surface to-surface p-6 glow-hot">
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gold text-3xl font-black text-background shadow-card">
            #{top.rank}
          </div>
          <div className="flex-1 min-w-[220px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-hot/20 px-2 py-0.5 text-xs font-bold text-hot">
              <Flame className="h-3 w-3" /> ON FIRE
            </span>
            <h2 className="mt-1 text-2xl font-bold">{top.player}</h2>
            <p className="text-sm text-body">{top.flag} {top.team} · {top.position} · 2G 1A vs Argentina (67')</p>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider text-subtle">Impact Score</div>
            <div className="num text-5xl font-black text-foreground">{top.score.toFixed(1)}</div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Leaderboard />
        <div className="space-y-6">
          <MarketMovers />
          <div className="rounded-2xl border border-border bg-surface-grad p-5">
            <h3 className="mb-3 text-base font-bold">Momentum Legend</h3>
            <ul className="space-y-2 text-sm text-body">
              <li>🔥 <span className="font-medium">On Fire</span> — multi-match hot streak</li>
              <li>📈 <span className="font-medium">Rising</span> — score trending up</li>
              <li>➖ <span className="font-medium">Stable</span> — holding rank</li>
              <li>📉 <span className="font-medium">Cooling</span> — momentum dropping</li>
            </ul>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
