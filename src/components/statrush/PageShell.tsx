import type { ReactNode } from "react";
import { AppHeader, BottomNav } from "./AppHeader";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-6 sm:px-6 md:pb-12">{children}</main>
      <BottomNav />
    </div>
  );
}
