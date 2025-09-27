// src/pages/VenueProfile.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { venues } from "../data/venues";
import { bands } from "../data/bands";
import { shows } from "../data/shows";

export default function VenueProfile() {
  const { venueId } = useParams();
  const venue = venues.find((v) => v.id === venueId);

  if (!venue) return <div className="p-6 text-white">Venue not found</div>;

  // Shows for this venue
  const venueShows = shows.filter((s) => s.venueId === venueId);

  const upcomingShows = venueShows.filter(
    (s) => new Date(s.date) >= new Date()
  );
  const pastShows = venueShows
    .filter((s) => new Date(s.date) < new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="p-6 text-white">
      {/* Venue Header */}
      <div className="bg-gray-900 p-6 rounded-lg mb-6">
        <h1 className="text-3xl font-bold text-green-400">{venue.name}</h1>
        <p className="text-gray-400">
          {venue.city}, {venue.state}
        </p>
        <p className="mt-2">Capacity: {venue.capacity}</p>
        <p>Email: {venue.email || "n/a"}</p>
        <p>Facebook: {venue.facebook || "n/a"}</p>
      </div>

      {/* Upcoming Shows */}
      <h2 className="text-xl font-bold mb-3">Upcoming Shows</h2>
      {upcomingShows.length > 0 ? (
        upcomingShows.map((show) => {
          const band = bands.find((b) => b.id === show.bandId);
          return (
            <div
              key={show.id}
              className="bg-gray-800 p-4 rounded mb-3 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">
                  {band ? band.name : "Unknown Band"}
                </p>
                <p className="text-sm text-gray-400">
                  {new Date(show.date).toLocaleString()}
                </p>
              </div>
              <button className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-400">
                Buy Tickets
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400">No upcoming shows.</p>
      )}

      {/* Past Shows */}
      <h2 className="text-xl font-bold mt-6 mb-3">Past Shows</h2>
      {pastShows.length > 0 ? (
        pastShows.map((show) => {
          const band = bands.find((b) => b.id === show.bandId);
          return (
            <div
              key={show.id}
              className="bg-gray-800 p-4 rounded mb-3 flex flex-col"
            >
              <p className="font-semibold">
                {band ? band.name : "Unknown Band"}
              </p>
              <p className="text-sm text-gray-400">
                {new Date(show.date).toLocaleString()}
              </p>
              <div className="mt-2 text-sm text-gray-300">
                <p>🎟 Tickets Sold: {show.stats?.ticketsSold || "N/A"}</p>
                <p>✅ Verified Scans: {show.stats?.verified || "N/A"}</p>
                <p>⭐ Rating: {show.stats?.rating || "Not rated"}</p>
                <p>👀 Views: {show.stats?.views || 0}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-gray-400">No past shows logged.</p>
      )}
    </div>
  );
}
