export type Trend = "up" | "down" | "same";

export interface Player {
  rank: number;
  player: string;
  team: string;
  flag: string;
  position: "FW" | "MF" | "DF" | "GK";
  score: number;
  trend: Trend;
  trendValue: string;
  goals: number;
  assists: number;
  cards: number;
  momentum: "fire" | "rising" | "stable" | "falling";
}

export const players: Player[] = [
  { rank: 1, player: "Kylian Mbappé", team: "France", flag: "🇫🇷", position: "FW", score: 9.2, trend: "up", trendValue: "+1", goals: 5, assists: 2, cards: 0, momentum: "fire" },
  { rank: 2, player: "Lionel Messi", team: "Argentina", flag: "🇦🇷", position: "FW", score: 9.1, trend: "down", trendValue: "-1", goals: 4, assists: 3, cards: 0, momentum: "stable" },
  { rank: 3, player: "Jude Bellingham", team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "MF", score: 8.7, trend: "up", trendValue: "+3", goals: 2, assists: 4, cards: 1, momentum: "rising" },
  { rank: 4, player: "Vinicius Jr", team: "Brazil", flag: "🇧🇷", position: "FW", score: 8.5, trend: "same", trendValue: "0", goals: 3, assists: 1, cards: 1, momentum: "stable" },
  { rank: 5, player: "Rodri", team: "Spain", flag: "🇪🇸", position: "MF", score: 8.4, trend: "up", trendValue: "+5", goals: 1, assists: 2, cards: 0, momentum: "fire" },
  { rank: 6, player: "Harry Kane", team: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", position: "FW", score: 8.2, trend: "down", trendValue: "-2", goals: 3, assists: 0, cards: 0, momentum: "falling" },
  { rank: 7, player: "Jamal Musiala", team: "Germany", flag: "🇩🇪", position: "MF", score: 8.1, trend: "up", trendValue: "+2", goals: 1, assists: 3, cards: 0, momentum: "rising" },
  { rank: 8, player: "Federico Valverde", team: "Uruguay", flag: "🇺🇾", position: "MF", score: 7.9, trend: "up", trendValue: "+4", goals: 1, assists: 1, cards: 1, momentum: "rising" },
  { rank: 9, player: "Ruben Dias", team: "Portugal", flag: "🇵🇹", position: "DF", score: 7.8, trend: "down", trendValue: "-1", goals: 0, assists: 0, cards: 1, momentum: "falling" },
  { rank: 10, player: "Alisson Becker", team: "Brazil", flag: "🇧🇷", position: "GK", score: 7.7, trend: "same", trendValue: "0", goals: 0, assists: 0, cards: 0, momentum: "stable" },
];

export const risers = [
  { name: "Mbappé", change: "+8" },
  { name: "Bellingham", change: "+6" },
  { name: "Musiala", change: "+4" },
  { name: "Rodri", change: "+5" },
];

export const fallers = [
  { name: "Haaland", change: "-4" },
  { name: "Dias", change: "-3" },
  { name: "Kane", change: "-2" },
];

export const liveEvents = [
  { time: "67'", icon: "⚽", text: "Mbappé scores! France 2-1 Argentina", kind: "goal" },
  { time: "65'", icon: "🎯", text: "Griezmann assist", kind: "assist" },
  { time: "52'", icon: "🟨", text: "Otamendi booked", kind: "card" },
  { time: "44'", icon: "⚽", text: "Messi scores! Argentina 1-1", kind: "goal" },
  { time: "21'", icon: "⚽", text: "Dembélé scores! France 1-0", kind: "goal" },
  { time: "12'", icon: "🔄", text: "Substitution: Argentina", kind: "sub" },
];

export const upcomingMatches = [
  { home: "Brazil", away: "Spain", flagH: "🇧🇷", flagA: "🇪🇸", date: "Jun 18", time: "20:00", venue: "Estadio Azteca" },
  { home: "Germany", away: "Portugal", flagH: "🇩🇪", flagA: "🇵🇹", date: "Jun 19", time: "17:00", venue: "MetLife Stadium" },
  { home: "Netherlands", away: "Uruguay", flagH: "🇳🇱", flagA: "🇺🇾", date: "Jun 20", time: "21:00", venue: "SoFi Stadium" },
];

export const groups = [
  {
    name: "Group A",
    teams: [
      { team: "France", flag: "🇫🇷", p: 3, w: 3, d: 0, l: 0, gd: 7, pts: 9 },
      { team: "Argentina", flag: "🇦🇷", p: 3, w: 2, d: 0, l: 1, gd: 3, pts: 6 },
      { team: "Mexico", flag: "🇲🇽", p: 3, w: 1, d: 0, l: 2, gd: -2, pts: 3 },
      { team: "Canada", flag: "🇨🇦", p: 3, w: 0, d: 0, l: 3, gd: -8, pts: 0 },
    ],
  },
  {
    name: "Group B",
    teams: [
      { team: "Brazil", flag: "🇧🇷", p: 3, w: 2, d: 1, l: 0, gd: 5, pts: 7 },
      { team: "Spain", flag: "🇪🇸", p: 3, w: 2, d: 0, l: 1, gd: 2, pts: 6 },
      { team: "Croatia", flag: "🇭🇷", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
      { team: "Japan", flag: "🇯🇵", p: 3, w: 0, d: 0, l: 3, gd: -7, pts: 0 },
    ],
  },
];
