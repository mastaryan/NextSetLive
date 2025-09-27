import React, { useState } from "react";
import venues from "../data/venues"; // ✅ default import

export default function VenueDirectory() {
  const [filter, setFilter] = useState("");

  const filteredVenues = venues.filter(v =>
    v.state.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-purple-400 mb-4">Venues</h2>
      <label className="mr-2 text-sm">Filter by state:</label>
      <input
        type="text"
        placeholder="e.g. KY"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 rounded text-black mb-6"
      />
      <div className="grid md:grid-cols-3 gap-4">
        {filteredVenues.map((venue) => (
          <div key={venue.id} className="bg-gray-900 p-4 rounded shadow">
            <h3 className="text-green-400 font-bold text-lg">{venue.name}</h3>
            <p>{venue.city}, {venue.state}</p>
            <p>Capacity: {venue.capacity}</p>
            <p>Email: {venue.email}</p>
            <p>Facebook: <a href={venue.facebook} target="_blank" rel="noreferrer" className="text-blue-400">link</a></p>
            <p className="mt-2">⭐ {venue.rating} / 5</p>
            {venue.verified && (
              <span className="bg-green-600 text-xs px-2 py-1 rounded">Verified</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
