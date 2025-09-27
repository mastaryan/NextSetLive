import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import VenueDirectory from "./pages/VenueDirectory";
import VenueProfile from "./pages/VenueProfile";
import BandDirectory from "./pages/BandDirectory";
import BandProfile from "./pages/BandProfile";
import TicketCheckout from "./pages/TicketCheckout";
import TicketConfirm from "./pages/TicketConfirm";

import logo from "./assets/logo-pick.png"; // green guitar-pick logo

export default function App(){
  return (
    <div>
      <nav style={{display:'flex',gap:18,alignItems:'center',padding:'12px 20px',borderBottom:'1px solid #1d2230',position:'sticky',top:0,background:'#000',zIndex:10}}>
        <Link to="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
          <img src={logo} alt="NextSetLive" width="28" height="28" />
          <span style={{fontWeight:800, color:'#22c55e'}}>NextSetLive</span>
        </Link>
        <Link to="/venues" style={{color:'#cbd5e1'}}>Venues</Link>
        <Link to="/bands" style={{color:'#cbd5e1'}}>Bands</Link>
        <div style={{marginLeft:'auto',display:'flex',gap:8}}>
          <button className="btn">Login</button>
          <select className="btn" defaultValue="band">
            <option value="band">Band</option>
            <option value="venue">Venue</option>
            <option value="agent">Agent</option>
          </select>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/venues" element={<VenueDirectory/>} />
        <Route path="/venue/:venueId" element={<VenueProfile/>} />

        <Route path="/bands" element={<BandDirectory/>} />
        <Route path="/band/:bandId" element={<BandProfile/>} />

        <Route path="/ticket/checkout" element={<TicketCheckout/>} />
        <Route path="/ticket/confirm" element={<TicketConfirm/>} />
      </Routes>

      <footer style={{padding:18,borderTop:'1px solid #1d2230',marginTop:40,fontSize:12,color:'#94a3b8'}}>
        © {new Date().getFullYear()} NextSetLive — Demo build (UI only).
      </footer>
    </div>
  );
}
