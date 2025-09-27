import React from "react";
import { useSearchParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { shows } from "../data/shows";
import { bands } from "../data/bands";
import { venues } from "../data/venues";

export default function TicketConfirm() {
  const [searchParams] = useSearchParams();
  const showId = searchParams.get("showId");

  const show = shows.find((s) => s.id === showId);
  const band = bands.find((b) => b.id === show?.bandId);
  const venue = venues.find((v) => v.id === show?.venueId);

  if (!show) return <div className="p-6 text-white">Ticket not found</div>;

  const ticketInfo = `${band?.name} — ${venue?.name}, ${venue?.city}, ${venue?.state} — ${new Date(show.date).toLocaleString()}`;

  return (
    <div className="p-6 text-white text-center">
      <h1 className="text-2xl font-bold text-green-400 mb-4">Your Ticket</h1>
      <p className="mb-2">{ticketInfo}</p>
      <div className="flex justify-center my-6">
        <QRCodeCanvas value={ticketInfo} size={200} />
      </div>
      <div className="space-y-2">
        <button className="w-full p-2 bg-gray-800 rounded hover:bg-gray-700">Add to Wallet</button>
        <button className="w-full p-2 bg-gray-800 rounded hover:bg-gray-700">Download PDF</button>
        <button className="w-full p-2 bg-gray-800 rounded hover:bg-gray-700">Print Ticket</button>
        <button className="w-full p-2 bg-gray-800 rounded hover:bg-gray-700">Transfer Ticket</button>
      </div>
    </div>
  );
}
