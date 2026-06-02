import { Routes, Route } from "react-router-dom";
import Landing from "@/pages/Landing";
import Rankings from "@/pages/Rankings";
import Matches from "@/pages/Matches";
import Tournament from "@/pages/Tournament";
import PlayersIndex from "@/pages/PlayersIndex";
import PlayerProfile from "@/pages/PlayerProfile";
import About from "@/pages/About";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/tournament" element={<Tournament />} />
      <Route path="/players" element={<PlayersIndex />} />
      <Route path="/players/:id" element={<PlayerProfile />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
