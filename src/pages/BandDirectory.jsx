import React from "react";
import { Link } from "react-router-dom";
import bands from "../data/bands";

function avgStars(reviews = []){
  const vals = reviews
    .map(r => (typeof r.stars === "number" ? r.stars : (typeof r.rating === "number" ? r.rating : null)))
    .filter(v => typeof v === "number");
  if(!vals.length) return 0;
  return Math.round((vals.reduce((a,b)=>a+b,0) / vals.length) * 10) / 10;
}

export default function BandDirectory() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-400">Bands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bands.map((band) => {
          const rating = typeof band.rating === "number" && band.rating > 0
            ? band.rating
            : avgStars(band.reviews);
          return (
            <Link
              key={band.id}
              to={`/band/${band.id}`}
              className="block border border-gray-700 rounded-lg p-4 bg-gray-900 hover:shadow-lg hover:border-green-400 transition"
            >
              <h2 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
                {band.name}
                {band.verified && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-black bg-green-400 px-2 py-0.5 rounded-full">
                    ✔ Verified
                  </span>
                )}
              </h2>
              <p className="text-gray-400">{band.genre}</p>
              <div className="mt-2">
                <span className="text-yellow-400">
                  {"★".repeat(Math.round(rating || 0))}
                </span>
                <span className="text-gray-600">
                  {"★".repeat(5 - Math.round(rating || 0))}
                </span>
                {rating ? <span className="text-gray-400 text-sm ml-2">({rating}/5)</span> : null}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
