import React from "react";
import { Link } from "react-router-dom";
import { bands } from "../data/bands";
import VerifiedTag from "../components/VerifiedTag";
import NextScoreBadge from "../components/NextScoreBadge";
import { computeNextScore } from "../utils/score";

export default function Bands(){
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Bands</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {bands.map(b => {
          const score = computeNextScore(b);
          return (
            <Link key={b.id} to={`/band/${b.id}`} className="block bg-gray-900 border border-gray-800 rounded-xl p-4 hover:border-purple-500 transition">
              <div className="flex items-center gap-4">
                <img src={b.image} alt={b.name} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">{b.name}</h2>
                    {b.verified && <VerifiedTag />}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{b.home || ""}</div>
                </div>
                <NextScoreBadge score={score} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
