import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { shows } from "../data/shows";
import { bands } from "../data/bands";
import { venues } from "../data/venues";

export default function TicketCheckout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const showId = searchParams.get("showId");

  const show = shows.find((s) => s.id === showId);
  const band = bands.find((b) => b.id === show?.bandId);
  const venue = venues.find((v) => v.id === show?.venueId);

  const handlePurchase = (e) => {
    e.preventDefault();
    navigate(
      `/ticket/confirm?showId=${showId}`
    );
  };

  if (!show) return <div className="p-6 text-white">Show not found</div>;

  return (
    <div className="p-6 text-white max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-green-400 mb-4">Checkout</h1>
      <p className="mb-2 font-semibold">{band?.name}</p>
      <p className="mb-2">{venue?.name} — {venue?.city}, {venue?.state}</p>
      <p className="mb-4">{new Date(show.date).toLocaleString()}</p>

      <form onSubmit={handlePurchase} className="space-y-3">
        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Name on Card"
        />
        <input
          className="w-full p-2 rounded bg-gray-800"
          placeholder="Card Number (use 4444...)"
        />
        <div className="flex gap-2">
          <input className="w-1/2 p-2 rounded bg-gray-800" placeholder="MM/YY" />
          <input className="w-1/2 p-2 rounded bg-gray-800" placeholder="CVC" />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-black rounded hover:bg-green-400"
        >
          Purchase
        </button>
      </form>
    </div>
  );
}
