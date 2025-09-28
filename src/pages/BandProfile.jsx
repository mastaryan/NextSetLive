import React from "react";
import { useParams } from "react-router-dom";
import bands from "../data/bands";
import shows from "../data/shows";
import { FaSpotify, FaInstagram, FaFacebook, FaTwitter, FaGlobe } from "react-icons/fa";

export default function BandProfile() {
  const { bandId } = useParams();
  const band = bands.find((b) => b.id === bandId);

  if (!band) {
    return <p className="p-6 text-red-400">Band not found.</p>;
  }

  const upcoming = shows.filter((s) => s.bandId === band.id && !s.past);
  const past = shows.filter((s) => s.bandId === band.id && s.past);

  return (
    <div className="p-6">
      {/* Band Header */}
      <h1 className="text-3xl font-bold text-green-400 mb-2 flex items-center gap-2">
        {band.name}
        {band.verified && (
          <span className="text-green-400 text-sm font-bold">✅ Verified</span>
        )}
      </h1>
      <p className="text-gray-400">{band.genre || "Genre TBD"}</p>

      {/* Socials */}
      <div className="flex gap-4 mt-3 text-xl">
        {band.spotify && (
          <a href={band.spotify} target="_blank" rel="noreferrer">
            <FaSpotify className="text-green-500 hover:text-green-300" />
          </a>
        )}
        {band.instagram && (
          <a href={band.instagram} target="_blank" rel="noreferrer">
            <FaInstagram className="text-pink-500 hover:text-pink-300" />
          </a>
        )}
        {band.facebook && (
          <a href={band.facebook} target="_blank" rel="noreferrer">
            <FaFacebook className="text-blue-500 hover:text-blue-300" />
          </a>
        )}
        {band.twitter && (
          <a href={band.twitter} target="_blank" rel="noreferrer">
            <FaTwitter className="text-blue-400 hover:text-blue-200" />
          </a>
        )}
        {band.website && (
          <a href={band.website} target="_blank" rel="noreferrer">
            <FaGlobe className="text-purple-400 hover:text-purple-200" />
          </a>
        )}
      </div>

      {/* Reviews */}
      {band.reviews && band.reviews.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-2">Reviews</h2>
          <ul className="space-y-3">
            {band.reviews.map((review, idx) => (
              <li
                key={idx}
                className="border border-gray-700 rounded p-3 bg-gray-800"
              >
                <p className="font-semibold text-green-300">{review.source}</p>
                <p className="text-gray-400">{review.text}</p>
                <p className="text-yellow-400">
                  {"★".repeat(review.stars)}{" "}
                  <span className="text-gray-500">
                    {"★".repeat(5 - review.stars)}
                  </span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Upcoming Shows */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Upcoming Shows</h2>
        {upcoming.length > 0 ? (
          <ul className="space-y-2">
            {upcoming.map((show) => (
              <li
                key={show.id}
                className="border border-gray-700 rounded p-3 bg-gray-800"
              >
                <p className="text-green-300 font-semibold">{show.title}</p>
                <p className="text-gray-400">
                  {new Date(show.date).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No upcoming shows listed.</p>
        )}
      </div>

      {/* Past Shows */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-3">Past Shows</h2>
        {past.length > 0 ? (
          <ul className="space-y-2">
            {past.slice(-3).map((show) => (
              <li
                key={show.id}
                className="border border-gray-700 rounded p-3 bg-gray-800"
              >
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
