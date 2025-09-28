import React from "react";
import { useLocation, Link } from "react-router-dom";
import QRCode from "qrcode.react";
import shows from "../data/shows";
import bands from "../data/bands";
import venues from "../data/venues";

export default function TicketConfirm() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const showId = params.get("showId");
  const qty = params.get("qty");
  const show = shows.find(s => s.id === showId);
  const band = bands.find(b => b.id === show?.bandId);
  const venue = venues.find(v => v.id === show?.venueId);

  if (!show) return <p className="p-6">Show not found.</p>;

  const payload = JSON.stringify({ showId, band: band?.name, venue: venue?.name, qty, date: show.date });

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold text-green-400 mb-4">Order Confirmed</h1>
      <div className="border border-gray-700 rounded p-4 bg-gray-900 mb-4">
        <p className="font-semibold text-purple-400">{show.title}</p>
        <p className="text-gray-400">{new Date(show.date).toLocaleString()}</p>
        <p className="text-gray-400">{venue?.name} — {venue?.city}, {venue?.state}</p>
        <p className="text-gray-400">Qty: {qty}</p>
      </div>

      <div className="flex justify-center my-6">
        <QRCode value={payload} size={180} />
      </div>

      <div className="flex gap-3">
        <button onClick={() => window.print()} className="px-4 py-2 bg-gray-200 text-black rounded">Download PDF</button>
        <button onClick={() => alert("Transfer demo")} className="px-4 py-2 bg-purple-600 rounded">Transfer</button>
        <Link to={`/band/${band?.id}`} className="px-4 py-2 bg-green-500 text-black rounded">Back to Band</Link>
      </div>
    </div>
  );
}
