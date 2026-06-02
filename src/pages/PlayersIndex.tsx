import { Link } from "react-router-dom";
import { PageShell } from "@/components/statrush/PageShell";
import { players } from "@/lib/statrush-data";
import { TrendBadge, MomentumBadge } from "@/components/statrush/Trend";

export default function PlayersIndex() {
  return (
    <PageShell>
      <h1 className="text-3xl font-bold">All Players</h1>
      <p className="mt-1 text-sm text-body">Tap any player to open their full profile and impact chart.</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((p) => (
          <Link
            key={p.rank}
            to={`/players/${p.rank}`}
            className="rounded-2xl border border-border bg-surface-grad p-4 row-hover"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-secondary text-2xl">{p.flag}</div>
                <div>
                  <div className="font-semibold">{p.player}</div>
                  <div className="text-xs text-subtle">{p.team} · {p.position}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="num text-2xl font-bold">{p.score.toFixed(1)}</div>
                <div className="text-xs text-subtle">#{p.rank}</div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <TrendBadge trend={p.trend} value={p.trendValue} />
              <MomentumBadge m={p.momentum} />
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
