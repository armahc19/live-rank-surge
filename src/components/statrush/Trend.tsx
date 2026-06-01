import { ArrowDown, ArrowUp, Minus, Flame, Snowflake } from "lucide-react";
import type { Player } from "@/lib/statrush-data";

export function TrendBadge({ trend, value }: { trend: Player["trend"]; value: string }) {
  if (trend === "up")
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-bullish/10 px-2 py-0.5 text-bullish num text-sm font-semibold">
        <ArrowUp className="h-3 w-3" /> {value}
      </span>
    );
  if (trend === "down")
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-bearish/10 px-2 py-0.5 text-bearish num text-sm font-semibold">
        <ArrowDown className="h-3 w-3" /> {value}
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-muted/40 px-2 py-0.5 text-subtle num text-sm font-semibold">
      <Minus className="h-3 w-3" /> 0
    </span>
  );
}

export function MomentumBadge({ m }: { m: Player["momentum"] }) {
  const cfg = {
    fire: { icon: <Flame className="h-3 w-3" />, label: "On Fire", cls: "text-hot bg-hot/10" },
    rising: { icon: <ArrowUp className="h-3 w-3" />, label: "Rising", cls: "text-bullish bg-bullish/10" },
    stable: { icon: <Minus className="h-3 w-3" />, label: "Stable", cls: "text-subtle bg-muted/40" },
    falling: { icon: <Snowflake className="h-3 w-3" />, label: "Cooling", cls: "text-bearish bg-bearish/10" },
  }[m];
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ${cfg.cls}`}>
      {cfg.icon} {cfg.label}
    </span>
  );
}
