import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import shows from "../data/shows";
import bands from "../data/bands";
import venues from "../data/venues";

export default function TicketCheckout() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const showId = new URLSearchParams(search).get("showId");
  const show = shows.find(s => s.id === showId);
  const band = bands.find(b => b.id === show?.bandId);
  const venue = venues.find(v => v.id === show?.venueId);

  const [qty, setQty] = useState(1);
  const [card, setCard] = useState("");

  if (!show) return <p className="p-6">Show not found.</p>;

  const handleBuy = e => {
    e.preventDefault();
    if (card.replace(/\s+/g, "").length === 16) {
      navigate(`/ticket/confirm?showId=${showId}&qty=${qty}`);
    } else {
      alert("Enter a 16-digit demo card (4444…).");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold text-green-400 mb-4">Checkout</h1>
      <div className="border border-gray-700 rounded p-4 bg-gray-900 mb-4">
        <p className="font-semibold text-purple-400">{show.title}</p>
        <p className="text-gray-400">{new Date(show.date).toLocaleString()}</p>
        <p className="text-gray-400">{venue?.name}, {venue?.city} {venue?.state}</p>
      </div>

      <form onSubmit={handleBuy} className="space-y-4">
        <label className="block">
          <span className="text-sm text-gray-400">Quantity</span>
          <input type="number" min="1" value={qty} onChange={e => setQty(e.target.value)} className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-400">Card Number</span>
          <input value={card} onChange={e => setCard(e.target.value)} placeholder="4444 4444 4444 4444" className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white" />
        </label>
        <button type="submit" className="w-full py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400">
          Purchase
        </button>
      </form>
    </div>
  );
}
