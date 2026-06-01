import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/statrush/PageShell";
import { players } from "@/lib/statrush-data";
import { TrendBadge, MomentumBadge } from "@/components/statrush/Trend";

export const Route = createFileRoute("/players/$id")({
  head: ({ params }) => {
    const p = players.find((pp) => String(pp.rank) === params.id);
    return {
      meta: [
        { title: p ? `${p.player} — StatRush` : "Player — StatRush" },
        { name: "description", content: p ? `${p.player} (${p.team}) — Impact ${p.score.toFixed(1)}, ${p.goals}G ${p.assists}A.` : "Player profile" },
      ],
    };
  },
  component: PlayerProfile,
  notFoundComponent: () => (
    <PageShell><p className="text-body">Player not found.</p></PageShell>
  ),
  loader: ({ params }) => {
    const p = players.find((pp) => String(pp.rank) === params.id);
    if (!p) throw notFound();
    return p;
  },
});

const matchHistory = [
  { match: "M1", score: 7.2, opp: "Canada" },
  { match: "M2", score: 8.1, opp: "Mexico" },
  { match: "M3", score: 8.8, opp: "Argentina" },
  { match: "M4", score: 9.2, opp: "Brazil" },
];

const events = [
  { match: "vs Argentina", items: [
    { icon: "⚽", text: "Goal", min: "67'" },
    { icon: "🎯", text: "Assist", min: "52'" },
    { icon: "🟨", text: "Yellow card", min: "81'" },
  ]},
  { match: "vs Mexico", items: [
    { icon: "⚽", text: "Goal", min: "33'" },
    { icon: "⚽", text: "Goal", min: "71'" },
  ]},
];

function PlayerProfile() {
  const p = Route.useLoaderData();
  const max = Math.max(...matchHistory.map((m) => m.score));
  const min = Math.min(...matchHistory.map((m) => m.score));
  const range = Math.max(max - min, 0.5);
  const w = 600, h = 180, pad = 20;
  const pts = matchHistory.map((m, i) => {
    const x = pad + (i * (w - pad * 2)) / (matchHistory.length - 1);
    const y = h - pad - ((m.score - min) / range) * (h - pad * 2);
    return { x, y, ...m };
  });
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const area = `${path} L${pts[pts.length-1].x},${h-pad} L${pts[0].x},${h-pad} Z`;

  return (
    <PageShell>
      <Link to="/rankings" className="mb-4 inline-flex items-center gap-1 text-sm text-subtle hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Back to rankings
      </Link>

      <section className="overflow-hidden rounded-2xl border border-border bg-surface-grad p-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-bg-secondary text-5xl">{p.flag}</div>
          <div className="flex-1 min-w-[200px]">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary">#{p.rank} · {p.position}</div>
            <h1 className="text-4xl font-bold">{p.player}</h1>
            <div className="mt-1 text-sm text-body">{p.flag} {p.team} National Team</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <TrendBadge trend={p.trend} value={`${p.trendValue} positions`} />
              <MomentumBadge m={p.momentum} />
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-wider text-subtle">Impact Score</div>
            <div className="num text-6xl font-black text-foreground sm:text-7xl">{p.score.toFixed(1)}</div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-border bg-surface-grad p-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-lg font-bold">Impact Score Over Time</h2>
          <span className="text-xs text-subtle">Last 4 matches</span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="h-44 w-full">
          <defs>
            <linearGradient id="ig" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.16 250)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="oklch(0.72 0.16 250)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill="url(#ig)" />
          <path d={path} fill="none" stroke="oklch(0.72 0.16 250)" strokeWidth="2.5" />
          {pts.map((pt) => (
            <g key={pt.match}>
              <circle cx={pt.x} cy={pt.y} r="4" fill="oklch(0.72 0.16 250)" />
              <text x={pt.x} y={h - 4} textAnchor="middle" className="fill-current text-[10px]" style={{ fill: "var(--subtle)" }}>
                {pt.match} · {pt.opp}
              </text>
            </g>
          ))}
        </svg>
      </section>

      <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { l: "Goals", v: p.goals },
          { l: "Assists", v: p.assists },
          { l: "Minutes", v: 360 },
          { l: "Matches", v: 4 },
          { l: "Yellow", v: p.cards },
          { l: "Red", v: 0 },
        ].map((s) => (
          <div key={s.l} className="rounded-xl border border-border bg-surface p-4">
            <div className="text-xs uppercase tracking-wider text-subtle">{s.l}</div>
            <div className="num mt-1 text-3xl font-bold">{s.v}</div>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-border bg-surface-grad p-6">
        <h2 className="mb-4 text-lg font-bold">Recent Match Events</h2>
        <div className="space-y-6">
          {events.map((g) => (
            <div key={g.match}>
              <div className="mb-2 text-sm font-semibold text-body">{g.match}</div>
              <ul className="space-y-2">
                {g.items.map((e, i) => (
                  <li key={i} className="ticker flex items-center gap-3 rounded-lg bg-surface px-4 py-2.5">
                    <span className="text-lg">{e.icon}</span>
                    <span className="num w-12 text-sm text-subtle">{e.min}</span>
                    <span className="text-sm font-medium">{e.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
