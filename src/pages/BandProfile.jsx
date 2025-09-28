import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import bands from "../data/bands";
import shows from "../data/shows";
import venues from "../data/venues";
import { FaSpotify, FaInstagram, FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";

export default function BandProfile() {
  const { bandId } = useParams();
  const navigate = useNavigate();
  const band = bands.find((b) => b.id === bandId);

  if (!band) return <p className="p-6 text-red-400">Band not found.</p>;

  const upcoming = shows.filter((s) => s.bandId === band.id && !s.past);
  const past = shows.filter((s) => s.bandId === band.id && s.past);
  const soldOut = past.find((p) => p.soldOut);
  const soldOutVenue = soldOut ? venues.find(v => v.id === soldOut.venueId) : null;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-start gap-4">
        {band.image && <img src={band.image} alt={band.name} className="w-20 h-20 rounded-xl object-cover" />}
        <div>
          <h1 className="text-3xl font-extrabold text-green-400 flex items-center gap-2">
            {band.name}
            {band.verified && (
              <span className="text-xs bg-green-400 text-black px-2 py-0.5 rounded-full">
                ✔ Verified
              </span>
            )}
          </h1>
          <p className="text-gray-400">{band.genre}</p>
          <div className="flex gap-4 mt-2 text-xl">
            {band.spotify && <a href={band.spotify} target="_blank" rel="noreferrer" className="hover:text-green-400"><FaSpotify /></a>}
            {band.instagram && <a href={band.instagram} target="_blank" rel="noreferrer" className="hover:text-green-400"><FaInstagram /></a>}
            {band.facebook && <a href={band.facebook} target="_blank" rel="noreferrer" className="hover:text-green-400"><FaFacebook /></a>}
            {band.twitter && <a href={band.twitter} target="_blank" rel="noreferrer" className="hover:text-green-400"><FaTwitter /></a>}
            {band.website && <a href={band.website} target="_blank" rel="noreferrer" className="hover:text-green-400"><FaGlobe /></a>}
          </div>
          {soldOutVenue && (
            <div className="mt-3 text-sm bg-purple-600/30 border border-purple-600 px-2 py-1 rounded">
              ✅ Sold out {soldOutVenue.name} ({soldOutVenue.capacity} cap)
            </div>
          )}
        </div>
      </div>

      {/* Reviews */}
      {band.reviews?.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-2">Reviews</h2>
          <ul className="space-y-2">
            {band.reviews.map((r, i) => (
              <li key={i} className="border border-gray-700 rounded p-3 bg-gray-900">
                <p className="text-gray-300">{r.text}</p>
                <p className="text-sm text-gray-500 mt-1">— {r.source}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upcoming Shows */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Upcoming Shows</h2>
        {upcoming.length ? (
          <ul className="space-y-2">
            {upcoming.map(show => {
              const v = venues.find(v => v.id === show.venueId);
              return (
                <li key={show.id} className="border border-gray-700 rounded p-3 bg-gray-900 flex justify-between items-center">
                  <div>
                    <p className="text-green-300 font-semibold">{show.title}</p>
                    <p className="text-gray-400">{new Date(show.date).toLocaleString()} @ <Link to={`/venue/${v?.id}`} className="underline hover:text-green-400">{v?.name}</Link></p>
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
        ) : <p className="text-gray-500">No upcoming shows.</p>}
      </div>
    </div>
  );
}
