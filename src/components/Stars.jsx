import React from "react";

export default function Stars({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="flex items-center space-x-1">
      {[...Array(full)].map((_, i) => (
        <span key={`full-${i}`} className="text-yellow-400 text-lg">★</span>
      ))}
      {half && <span className="text-yellow-400 text-lg">☆</span>}
      {[...Array(empty)].map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-600 text-lg">★</span>
      ))}
      <span className="ml-2 text-sm text-gray-400">{rating.toFixed(1)}/5</span>
    </div>
  );
}
