import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TicketCheckout() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [card, setCard] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card.length === 16) {
      navigate("/ticket/confirm", { state: { quantity } });
    } else {
      alert("Please enter a valid 16-digit card number (use 4444... for demo).");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-gray-900 border border-gray-700 rounded-lg">
      <h1 className="text-2xl font-bold text-green-400 mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-300">Tickets (max 4)</span>
          <input
            type="number"
            min="1"
            max="4"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white"
          />
        </label>
        <label className="block">
          <span className="text-gray-300">Credit Card Number</span>
          <input
            type="text"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            placeholder="4444 4444 4444 4444"
            className="w-full p-2 mt-1 bg-gray-800 border border-gray-600 rounded text-white"
          />
        </label>
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
