import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/statrush/PageShell";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — StatRush" },
      { name: "description", content: "StatRush is the stock market for football players — live Impact Scores for every World Cup player." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">The stock market for football players.</h1>
        <p className="mt-4 text-lg text-body">
          StatRush turns every World Cup match into a live market. Each goal, assist, save and tackle moves a player's Impact Score — and their position on the global leaderboard.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { h: "One board", p: "All 736 tournament players ranked on a single live leaderboard." },
            { h: "One tournament", p: "Focused on the FIFA World Cup 2026 from group stage to final." },
            { h: "Live Impact Score", p: "A proprietary 0–10 rating that updates as matches unfold." },
            { h: "Market movement", p: "Track risers, fallers and momentum like you would a stock ticker." },
          ].map((b) => (
            <div key={b.h} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-bold">{b.h}</h3>
              <p className="mt-1 text-sm text-body">{b.p}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
