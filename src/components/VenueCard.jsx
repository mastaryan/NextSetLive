import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

export default function VenueCard({ venue }) {
  return (
    <div className="card w-80">
      <h3 className="text-lg font-bold text-green-400">
        <Link to={`/venue/${venue.id}`}>{venue.name}</Link>
      </h3>
      <p>{venue.city}, {venue.state}</p>
      <p>Capacity: {venue.capacity}</p>
      <p>Email: {venue.email}</p>
      <p>Facebook: {venue.facebook || "N/A"}</p>
      {venue.verified && (
        <span className="inline-block mt-2 px-2 py-1 text-xs rounded bg-green-600">Verified</span>
      )}
      {venue.rating && (
        <div className="stars mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar key={i} className={i < Math.round(venue.rating) ? "text-yellow-400" : "text-gray-600"} />
          ))}
          <span className="ml-2 text-sm text-gray-300">{venue.rating.toFixed(1)} / 5</span>
        </div>
      )}
    </div>
  );
}
