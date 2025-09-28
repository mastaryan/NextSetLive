import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import venues from "../data/venues";
import shows from "../data/shows";
import bands from "../data/bands";

export default function VenueProfile() {
  const { venueId } = useParams();
  const navigate = useNavigate();
  const venue = venues.find(v => v.id === venueId);

  if (!venue) return <p className="p-6 text-red-400">Venue not found.</p>;

  const upcoming = shows.filter(s => s.venueId === venue.id && !s.past);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-extrabold text-green-400">{venue.name}</h1>
      <p className="text-gray-400">{venue.city}, {venue.state} • Cap {venue.capacity}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Upcoming Shows</h2>
        {upcoming.length ? (
          <ul className="space-y-2">
            {upcoming.map(show => {
              const b = bands.find(b => b.id === show.bandId);
              return (
                <li key={show.id} className="border border-gray-700 rounded p-3 bg-gray-900 flex justify-between items-center">
                  <div>
                    <p className="text-green-300 font-semibold">{show.title}</p>
                    <p className="text-gray-400">{new Date(show.date).toLocaleString()} • <Link to={`/band/${b?.id}`} className="underline hover:text-green-400">{b?.name}</Link></p>
                  </div>
                  <button
                    onClick={() => navigate(`/ticket/checkout?showId=${show.id}`)}
                    className="px-3 py-1.5 rounded bg-green-500 text-black font-bold hover:bg-green-400"
                  >
                    Buy Tickets
                  </button>
                </li>
              );
            })}
          </ul>
        ) : <p className="text-gray-500">No shows scheduled.</p>}
      </div>
    </div>
  );
}
