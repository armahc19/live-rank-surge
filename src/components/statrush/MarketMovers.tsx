import { ArrowDown, ArrowUp, TrendingUp } from "lucide-react";
import { fallers, risers } from "@/lib/statrush-data";

export function MarketMovers() {
  return (
    <aside className="rounded-2xl border border-border bg-surface-grad p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-primary" />
        <h3 className="text-base font-bold">Market Movers</h3>
      </div>
      <div className="space-y-5">
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-bullish">Top Risers Today</div>
          <ul className="space-y-1.5">
            {risers.map((r) => (
              <li key={r.name} className="flex items-center justify-between rounded-md bg-bullish/5 px-3 py-2">
                <span className="text-sm font-medium">{r.name}</span>
                <span className="num inline-flex items-center gap-1 text-sm font-bold text-bullish">
                  <ArrowUp className="h-3 w-3" />
                  {r.change}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-bearish">Top Fallers Today</div>
          <ul className="space-y-1.5">
            {fallers.map((r) => (
              <li key={r.name} className="flex items-center justify-between rounded-md bg-bearish/5 px-3 py-2">
                <span className="text-sm font-medium">{r.name}</span>
                <span className="num inline-flex items-center gap-1 text-sm font-bold text-bearish">
                  <ArrowDown className="h-3 w-3" />
                  {r.change}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
