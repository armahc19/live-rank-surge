import { PageShell } from "@/components/statrush/PageShell";
import { liveEvents, players, upcomingMatches } from "@/lib/statrush-data";
import { TrendBadge } from "@/components/statrush/Trend";

const stats = [
  { label: "Possession", a: 58, b: 42 },
  { label: "Shots", a: 14, b: 9 },
  { label: "On Target", a: 6, b: 3 },
  { label: "Pass Accuracy", a: 89, b: 81 },
  { label: "Corners", a: 7, b: 4 },
  { label: "Fouls", a: 8, b: 11 },
];

export default function Matches() {
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">Match Center</h1>

      <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface-grad p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full bg-bearish/15 px-3 py-1 text-xs font-bold text-bearish">
            <span className="h-2 w-2 animate-pulse rounded-full bg-bearish" /> LIVE · 67'
          </span>
          <span className="text-xs text-subtle">Group Stage · Matchday 3</span>
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <div className="text-center">
            <div className="text-5xl">🇫🇷</div>
            <div className="mt-2 font-bold">France</div>
          </div>
          <div className="text-center">
            <div className="num text-6xl font-black">2 <span className="text-subtle">-</span> 1</div>
          </div>
          <div className="text-center">
            <div className="text-5xl">🇦🇷</div>
            <div className="mt-2 font-bold">Argentina</div>
          </div>
        </div>
      </section>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-surface-grad p-6">
          <h2 className="mb-4 text-lg font-bold">Match Statistics</h2>
          <ul className="space-y-3">
            {stats.map((s) => {
              const total = s.a + s.b;
              const aPct = (s.a / total) * 100;
              return (
                <li key={s.label}>
                  <div className="mb-1 flex justify-between text-xs text-subtle">
                    <span className="num font-semibold text-foreground">{s.a}</span>
                    <span>{s.label}</span>
                    <span className="num font-semibold text-foreground">{s.b}</span>
                  </div>
                  <div className="flex h-2 overflow-hidden rounded-full bg-bg-secondary">
                    <div className="bg-primary" style={{ width: `${aPct}%` }} />
                    <div className="bg-hot" style={{ width: `${100 - aPct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-surface-grad p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Live Event Feed</h2>
            <span className="text-xs text-subtle"><span className="live-dot inline-block" /> auto-updating</span>
          </div>
          <ul className="space-y-2">
            {liveEvents.map((e, i) => (
              <li key={i} className="ticker flex items-center gap-3 rounded-lg bg-surface px-4 py-2.5">
                <span className="num w-10 text-sm text-subtle">{e.time}</span>
                <span className="text-xl">{e.icon}</span>
                <span className="flex-1 text-sm">{e.text}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 rounded-2xl border border-border bg-surface-grad p-6">
        <h2 className="mb-4 text-lg font-bold">Player Impact Leaders — Live Match</h2>
        <ul className="divide-y divide-border">
          {players.slice(0, 5).map((p) => (
            <li key={p.rank} className="flex items-center gap-3 py-3">
              <span className="w-6 num text-sm font-bold text-subtle">{p.rank}</span>
              <span className="text-xl">{p.flag}</span>
              <div className="flex-1">
                <div className="font-semibold">{p.player}</div>
                <div className="text-xs text-subtle">{p.team} · {p.position}</div>
              </div>
              <div className="num text-lg font-bold">{p.score.toFixed(1)}</div>
              <TrendBadge trend={p.trend} value={p.trendValue} />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-border bg-surface-grad p-6">
        <h2 className="mb-4 text-lg font-bold">Upcoming Fixtures</h2>
        <ul className="divide-y divide-border">
          {upcomingMatches.map((m, i) => (
            <li key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3">
              <div className="text-right font-semibold">{m.flagH} {m.home}</div>
              <div className="text-center text-xs text-subtle">
                <div className="num font-semibold text-foreground">{m.time}</div>
                <div>{m.date}</div>
                <div className="mt-1">{m.venue}</div>
              </div>
              <div className="font-semibold">{m.away} {m.flagA}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
