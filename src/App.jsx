import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import VenueDirectory from "./pages/VenueDirectory";
import VenueProfile from "./pages/VenueProfile";
import BandDirectory from "./pages/BandDirectory";
import BandProfile from "./pages/BandProfile";
import TicketCheckout from "./pages/TicketCheckout";
import TicketConfirm from "./pages/TicketConfirm";
import Join from "./pages/Join";
import AgentLogin from "./pages/AgentLogin";

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="px-6 py-3 border-b border-gray-800 bg-black sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold text-green-400">NextSetLive</Link>
          <button
            onClick={()=>setOpen(v=>!v)}
            className="md:hidden border border-gray-700 rounded-lg px-3 py-2"
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/bands" className="hover:text-green-400">Bands</Link>
            <Link to="/venues" className="hover:text-green-400">Venues</Link>
            <Link to="/join" className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 font-semibold">Join</Link>
            <Link to="/agent" className="text-gray-300 hover:text-purple-400">Agent Login</Link>
            <Link to="/ticket/checkout" className="text-gray-300 hover:text-green-400">Ticket Demo</Link>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-3 space-y-2 border-t border-gray-800 pt-3">
            <Link to="/bands" className="block px-2 py-2 rounded hover:bg-gray-900" onClick={()=>setOpen(false)}>Bands</Link>
            <Link to="/venues" className="block px-2 py-2 rounded hover:bg-gray-900" onClick={()=>setOpen(false)}>Venues</Link>
            <Link to="/join" className="block px-2 py-2 rounded bg-purple-600 text-center" onClick={()=>setOpen(false)}>Join</Link>
            <Link to="/agent" className="block px-2 py-2 rounded hover:bg-gray-900" onClick={()=>setOpen(false)}>Agent Login</Link>
            <Link to="/ticket/checkout" className="block px-2 py-2 rounded hover:bg-gray-900" onClick={()=>setOpen(false)}>Ticket Demo</Link>
          </div>
        )}
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bands" element={<BandDirectory />} />
        <Route path="/band/:bandId" element={<BandProfile />} />
        <Route path="/venues" element={<VenueDirectory />} />
        <Route path="/venue/:venueId" element={<VenueProfile />} />
        <Route path="/join" element={<Join />} />
        <Route path="/agent" element={<AgentLogin />} />
        <Route path="/ticket/checkout" element={<TicketCheckout />} />
        <Route path="/ticket/confirm" element={<TicketConfirm />} />
        {/* Wildcard to catch unknown routes */}
        <Route path="*" element={<LandingPage />} />
      </Routes>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-gray-800 text-gray-500 text-sm mt-10 text-center">
        © {new Date().getFullYear()} NextSetLive — Demo build. All purchases are simulation only.
      </footer>
    </div>
  );
}
