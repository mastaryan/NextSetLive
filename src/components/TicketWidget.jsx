import React from "react";
import { useNavigate } from "react-router-dom";

export default function TicketWidget({ show }) {
  const navigate = useNavigate();
  const cap = show.capacity || 0;
  const sold = show.ticketsSold || 0;
  const pct = cap ? Math.min(100, Math.round((sold / cap) * 100)) : 0;

  if (show.purchaseVia === "external") {
    return (
      <div className="flex items-center gap-2">
        <div className="w-full bg-gray-800 h-2 rounded">
          <div className="h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded" style={{ width: `${pct}%` }} />
        </div>
        <a href={show.ticketLink} target="_blank" rel="noreferrer" className="px-3 py-1 rounded bg-purple-500 text-black font-semibold">Tickets</a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <div className="w-full bg-gray-800 h-2 rounded">
        <div className="h-2 bg-gradient-to-r from-purple-500 to-emerald-500 rounded" style={{ width: `${pct}%` }} />
      </div>
      <button
        onClick={() => navigate("/ticket/checkout", { state: { show } })}
        className="px-3 py-1 rounded bg-emerald-500 text-black font-semibold"
      >
        Buy
      </button>
      <span className="text-xs text-gray-400">{sold}/{cap} ({pct}%)</span>
    </div>
  );
}
