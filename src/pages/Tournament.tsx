import { PageShell } from "@/components/statrush/PageShell";
import { groups, upcomingMatches } from "@/lib/statrush-data";

const bracket = [
  { stage: "Round of 16", teams: ["France vs Senegal", "Brazil vs Japan", "Spain vs Croatia", "England vs USA", "Argentina vs Mexico", "Germany vs Belgium", "Portugal vs Netherlands", "Uruguay vs Morocco"] },
  { stage: "Quarter Finals", teams: ["France vs Spain", "Brazil vs England", "Argentina vs Germany", "Portugal vs Uruguay"] },
  { stage: "Semi Finals", teams: ["France vs Brazil", "Argentina vs Portugal"] },
  { stage: "Final", teams: ["TBD vs TBD"] },
];

export default function Tournament() {
  return (
    <PageShell>
      <header className="mb-6">
        <h1 className="text-3xl font-bold">FIFA World Cup 2026</h1>
        <p className="mt-1 text-sm text-body">Knockout progress, group tables and fixtures.</p>
      </header>

      <section className="overflow-x-auto rounded-2xl border border-border bg-surface-grad p-6">
        <h2 className="mb-4 text-lg font-bold">Knockout Bracket</h2>
        <div className="flex min-w-[800px] gap-6">
          {bracket.map((b) => (
            <div key={b.stage} className="flex-1">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">{b.stage}</div>
              <ul className="space-y-3">
                {b.teams.map((t, i) => (
                  <li key={i} className="rounded-lg border border-border bg-surface px-3 py-3 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        {groups.map((g) => (
          <div key={g.name} className="rounded-2xl border border-border bg-surface-grad p-6">
            <h3 className="mb-3 text-base font-bold">{g.name}</h3>
            <table className="w-full text-sm">
              <thead className="text-xs uppercase tracking-wider text-subtle">
                <tr>
                  <th className="py-2 text-left">Team</th>
                  <th className="py-2 text-right">P</th>
                  <th className="py-2 text-right">W</th>
                  <th className="py-2 text-right">D</th>
                  <th className="py-2 text-right">L</th>
                  <th className="py-2 text-right">GD</th>
                  <th className="py-2 text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {g.teams.map((t) => (
                  <tr key={t.team} className="border-t border-border">
                    <td className="py-2.5 font-medium">{t.flag} {t.team}</td>
                    <td className="num py-2.5 text-right">{t.p}</td>
                    <td className="num py-2.5 text-right">{t.w}</td>
                    <td className="num py-2.5 text-right">{t.d}</td>
                    <td className="num py-2.5 text-right">{t.l}</td>
                    <td className={`num py-2.5 text-right ${t.gd > 0 ? "text-bullish" : t.gd < 0 ? "text-bearish" : ""}`}>{t.gd > 0 ? `+${t.gd}` : t.gd}</td>
                    <td className="num py-2.5 text-right font-bold">{t.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>

      <section className="mt-6 rounded-2xl border border-border bg-surface-grad p-6">
        <h2 className="mb-4 text-lg font-bold">Upcoming Fixtures</h2>
        <ul className="divide-y divide-border">
          {upcomingMatches.map((m, i) => (
            <li key={i} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3">
              <div className="text-right font-semibold">{m.flagH} {m.home}</div>
              <div className="text-center text-xs text-subtle">
                <div className="num font-semibold text-foreground">{m.time}</div>
                <div>{m.date} · {m.venue}</div>
              </div>
              <div className="font-semibold">{m.away} {m.flagA}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
