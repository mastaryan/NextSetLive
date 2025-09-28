import React from "react";
import { useParams } from "react-router-dom";
import venues from "../data/venues";
import shows from "../data/shows";
import bands from "../data/bands";

export default function VenueProfile() {
  const { venueId } = useParams();
  const venue = venues.find((v) => v.id === venueId);

  if (!venue) {
    return <p className="p-6 text-red-400">Venue not found.</p>;
  }

  const upcoming = shows.filter((s) => s.venueId === venue.id);
  const past = shows.filter((s) => s.venueId === venue.id && s.past);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-2 flex items-center gap-2">
        {venue.name}
        {venue.verified && (
          <span className="text-green-400 text-sm font-bold">✅ Verified</span>
        )}
      </h1>
      <p className="text-gray-400">{venue.city}, {venue.state}</p>
      <p className="text-sm text-gray-500">Capacity: {venue.capacity}</p>
      <p className="text-sm text-gray-500">Booking: {venue.bookingEmail}</p>
      {venue.facebook && (
        <p className="text-sm text-blue-400">
          <a href={venue.facebook} target="_blank" rel="noreferrer">
            Facebook Page
          </a>
        </p>
      )}

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Upcoming Shows</h2>
        {upcoming.length > 0 ? (
          <ul className="space-y-2">
            {upcoming.map((show) => {
              const band = bands.find((b) => b.id === show.bandId);
              return (
                <li key={show.id} className="border border-gray-700 rounded p-3 bg-gray-800">
                  <p className="text-green-300 font-semibold">
                    {band ? band.name : "Unknown Band"}
                  </p>
                  <p className="text-gray-400">{new Date(show.date).toLocaleString()}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming shows listed.</p>
        )}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Past Shows</h2>
        {past.length > 0 ? (
          <ul className="space-y-2">
            {past.slice(-3).map((show) => (
              <li key={show.id} className="border border-gray-700 rounded p-3 bg-gray-800">
                <p className="text-green-300 font-semibold">{show.title}</p>
                <p className="text-gray-400">
                  {new Date(show.date).toLocaleDateString()}
                </p>
                <p className="text-gray-500">
                  Tickets Sold: {show.ticketsSold} / {show.capacity}
                </p>
                <p className="text-yellow-400">
                  {"★".repeat(show.rating || 0)}{" "}
                  <span className="text-gray-500">
                    {"★".repeat(5 - (show.rating || 0))}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No past shows yet.</p>
        )}
      </div>
    </div>
  );
}
