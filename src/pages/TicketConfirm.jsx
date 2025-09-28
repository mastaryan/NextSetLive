import React, { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import QRCode from "react-qr-code";
import shows from "../data/shows";
import bands from "../data/bands";

export default function TicketConfirm() {
  const location = useLocation();
  const { showId, bandId, ticketCount, buyerName } = location.state || {};

  const show = shows.find((s) => s.id === showId);
  const band = bands.find((b) => b.id === bandId);

  const ticketDetails = useMemo(() => {
    if (!show || !band) return "";
    return `Ticket for ${band.name} at ${show.venue} on ${show.date}\nName: ${buyerName}\nQuantity: ${ticketCount}`;
  }, [show, band, buyerName, ticketCount]);

  if (!show || !band) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Invalid Ticket</h1>
        <Link to="/" className="text-green-400 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-400 mb-4">
        Ticket Confirmed!
      </h1>
      <p className="text-gray-300 mb-6">
        You’re all set, {buyerName}. Show this QR code at the venue.
      </p>
      <div className="flex justify-center mb-6">
        <QRCode value={ticketDetails} size={200} />
      </div>
      <p className="text-gray-400 mb-6">{ticketDetails}</p>
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
