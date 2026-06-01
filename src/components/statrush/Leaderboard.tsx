import { Link } from "@tanstack/react-router";
import { players } from "@/lib/statrush-data";
import { MomentumBadge, TrendBadge } from "./Trend";

const positions = ["All", "FW", "MF", "DF", "GK"] as const;

export function Leaderboard() {
  return (
    <section className="rounded-2xl border border-border bg-surface-grad p-4 sm:p-6 shadow-card">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold">World Cup Impact Rankings</h2>
          <p className="text-sm text-subtle">Live player rankings updated in real-time</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-subtle">
          <span className="live-dot" /> Last updated 12s ago
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {positions.map((p, i) => (
          <button
            key={p}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              i === 0
                ? "border-primary/40 bg-primary/15 text-primary"
                : "border-border bg-surface text-body hover:bg-surface-hover"
            }`}
          >
            {p === "All" ? "All Players" : p}
          </button>
        ))}
        <button className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-body hover:bg-surface-hover">
          Min 2 matches
        </button>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-hidden rounded-xl border border-border md:block">
        <table className="w-full text-sm">
          <thead className="bg-bg-secondary text-xs uppercase tracking-wider text-subtle">
            <tr>
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Player</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-left">Pos</th>
              <th className="px-4 py-3 text-right">Impact</th>
              <th className="px-4 py-3 text-right">Trend</th>
              <th className="px-4 py-3 text-right">G</th>
              <th className="px-4 py-3 text-right">A</th>
              <th className="hidden px-4 py-3 text-right xl:table-cell">Cards</th>
              <th className="px-4 py-3 text-right">Form</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => {
              const top3 = p.rank <= 3;
              return (
                <tr key={p.rank} className="row-hover border-t border-border">
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold ${
                        top3 ? "bg-gold text-background glow-hot" : "bg-surface text-body"
                      }`}
                    >
                      {p.rank}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-medium">
                    <Link to="/players/$id" params={{ id: String(p.rank) }} className="hover:text-primary">
                      {p.player}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-body">
                    <span className="mr-1">{p.flag}</span>
                    {p.team}
                  </td>
                  <td className="px-4 py-3 text-subtle">{p.position}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="num text-lg font-bold">{p.score.toFixed(1)}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <TrendBadge trend={p.trend} value={p.trendValue} />
                  </td>
                  <td className="num px-4 py-3 text-right">{p.goals}</td>
                  <td className="num px-4 py-3 text-right">{p.assists}</td>
                  <td className="num hidden px-4 py-3 text-right xl:table-cell">{p.cards}</td>
                  <td className="px-4 py-3 text-right">
                    <MomentumBadge m={p.momentum} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-2 md:hidden">
        {players.map((p) => (
          <Link
            key={p.rank}
            to="/players/$id"
            params={{ id: String(p.rank) }}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface p-3"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold ${
                p.rank <= 3 ? "bg-gold text-background" : "bg-bg-secondary text-body"
              }`}
            >
              {p.rank}
            </span>
            <div className="flex-1 min-w-0">
              <div className="truncate font-semibold">{p.player}</div>
              <div className="text-xs text-subtle">
                {p.flag} {p.team} · {p.position}
              </div>
            </div>
            <div className="text-right">
              <div className="num text-lg font-bold">{p.score.toFixed(1)}</div>
              <TrendBadge trend={p.trend} value={p.trendValue} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
