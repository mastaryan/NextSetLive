import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BandDirectory from "./pages/BandDirectory";
import BandProfile from "./pages/BandProfile";
import VenueDirectory from "./pages/VenueDirectory";
import VenueProfile from "./pages/VenueProfile";
import Join from "./pages/Join";
import AgentLogin from "./pages/AgentLogin";
import TicketCheckout from "./pages/TicketCheckout";
import TicketConfirm from "./pages/TicketConfirm";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="px-6 py-3 border-b border-gray-800 bg-black sticky top-0 z-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-xl font-extrabold text-green-400 hover:text-green-300"
          >
            NextSetLive
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden border border-gray-700 rounded-lg px-3 py-2"
            aria-label="Toggle menu"
          >
            ☰
          </button>
          <div className="hidden md:flex items-center gap-6 relative">
            <Link to="/bands" className="hover:text-green-400">Bands</Link>
            <Link to="/venues" className="hover:text-green-400">Venues</Link>
            <Link
              to="/join"
              className="px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 font-semibold"
            >
              Join
            </Link>

            <div className="relative">
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="text-gray-300 hover:text-purple-400"
              >
                Login ▾
              </button>
              {loginOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-700 rounded-lg shadow-lg">
                  <Link
                    onClick={() => setLoginOpen(false)}
                    to="/join"
                    className="block px-3 py-2 hover:bg-gray-800"
                  >
                    Band
                  </Link>
                  <Link
                    onClick={() => setLoginOpen(false)}
                    to="/join"
                    className="block px-3 py-2 hover:bg-gray-800"
                  >
                    Venue
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 space-y-2 border-t border-gray-800 pt-3">
            <Link
              to="/bands"
              className="block px-2 py-2 rounded hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Bands
            </Link>
            <Link
              to="/venues"
              className="block px-2 py-2 rounded hover:bg-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              Venues
            </Link>
            <Link
              to="/join"
              className="block px-2 py-2 rounded bg-purple-600 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Join
            </Link>
            <button
              className="block px-2 py-2 rounded hover:bg-gray-900 text-left"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </button>
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
        <Route path="*" element={<LandingPage />} />
      </Routes>

      {/* Footer */}
      <footer className="px-6 py-4 border-t border-gray-800 text-gray-500 text-sm mt-10 text-center">
        © {new Date().getFullYear()} NextSetLive — Demo build. All purchases are simulation only.
      </footer>
    </div>
  );
}
