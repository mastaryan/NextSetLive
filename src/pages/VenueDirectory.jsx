import React from "react";
import { Link } from "react-router-dom";
import venues from "../data/venues";

export default function VenueDirectory() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Venues</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <Link
            key={venue.id}
            to={`/venue/${venue.id}`}
            className="block border border-gray-700 rounded-lg p-4 bg-gray-900 hover:shadow-lg hover:border-green-400 transition"
          >
            <h2 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
              {venue.name}
              {venue.verified && (
                <span className="text-green-400 text-sm font-bold">✅ Verified</span>
              )}
            </h2>
            <p className="text-sm text-gray-400">{venue.city}, {venue.state}</p>
            <p className="text-sm text-gray-500 mt-1">Capacity: {venue.capacity}</p>
            <p className="text-sm text-gray-500">Booking: {venue.bookingEmail}</p>
            {venue.facebook && (
              <p className="text-sm text-blue-400">
                <a href={venue.facebook} target="_blank" rel="noreferrer">
                  Facebook Page
                </a>
              </p>
            )}
            <div className="mt-2">
              <span className="text-yellow-400">
                {"★".repeat(venue.rating || 0)}
              </span>
              <span className="text-gray-500">
                {"★".repeat(5 - (venue.rating || 0))}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
