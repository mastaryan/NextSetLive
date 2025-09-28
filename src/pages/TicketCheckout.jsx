import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import shows from "../data/shows";
import bands from "../data/bands";
import venues from "../data/venues";

export default function TicketCheckout() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const showId = new URLSearchParams(search).get("showId");
  const show = shows.find((s) => s.id === showId);
  const band = bands.find((b) => b.id === show?.bandId);
  const venue = venues.find((v) => v.id === show?.venueId);

  const [qty, setQty] = useState(1);
  const [card, setCard] = useState("");
  const [exp, setExp] = useState(""); // MMYY
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState([]);

  if (!show) return <p className="p-6">Show not found.</p>;

  function sanitizeNum(s) {
    return (s || "").toString().replace(/\D/g, "");
  }

  function validate() {
    const errs = [];

    const digits = sanitizeNum(card);
    if (digits.length !== 16) {
      errs.push("Card number must be 16 digits (demo: 4444 4444 4444 4444).");
    }
    // Expiration MMYY simple validation
    const e = sanitizeNum(exp);
    if (!/^\d{4}$/.test(e)) {
      errs.push("Expiration must be 4 digits in MMYY format (e.g. 0926).");
    } else {
      const mm = parseInt(e.slice(0, 2), 10);
      if (mm < 1 || mm > 12) errs.push("Expiration month must be 01–12.");
    }

    const cv = sanitizeNum(cvv);
    if (!/^\d{3}$/.test(cv)) {
      errs.push("CVV must be 3 digits.");
    }

    return errs;
  }

  const handleBuy = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (errs.length === 0) {
      navigate(`/ticket/confirm?showId=${encodeURIComponent(showId)}&qty=${qty}`);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-extrabold text-green-400 mb-4">Checkout</h1>

      <div className="border border-gray-700 rounded p-4 bg-gray-900 mb-4">
        <p className="font-semibold text-purple-400">{show.title}</p>
        <p className="text-gray-400">{new Date(show.date).toLocaleString()}</p>
        <p className="text-gray-400">{venue?.name} — {venue?.city}, {venue?.state}</p>
      </div>

      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-900 text-red-200 rounded border border-red-700">
          <ul className="list-disc pl-5">
            {errors.map((er, i) => <li key={i}>{er}</li>)}
          </ul>
        </div>
      )}

      <form onSubmit={handleBuy} className="space-y-4">
        <label className="block">
          <span className="text-sm text-gray-400">Quantity</span>
          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) => setQty(Math.max(1, parseInt(e.target.value || "1", 10)))}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-400">Card Number</span>
          <input
            value={card}
            onChange={(e) => setCard(e.target.value)}
            placeholder="4444 4444 4444 4444"
            inputMode="numeric"
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white"
          />
          <p className="text-xs text-gray-500 mt-1">For demo: any 16-digit number will work (we normally show 4444...)</p>
        </label>

        <div className="grid grid-cols-3 gap-3">
          <label className="block">
            <span className="text-sm text-gray-400">Expiration (MMYY)</span>
            <input
              value={exp}
              onChange={(e) => setExp(e.target.value)}
              placeholder="MMYY"
              inputMode="numeric"
              className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white"
            />
          </label>

          <label className="block col-span-2">
            <span className="text-sm text-gray-400">CVV</span>
            <input
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="123"
              inputMode="numeric"
              className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white"
            />
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400"
        >
          Purchase
        </button>
      </form>
    </div>
  );
}
