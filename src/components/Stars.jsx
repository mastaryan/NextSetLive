import React from "react";
import { FaStar } from "react-icons/fa";

export default function Stars({ value=0, size=14 }) {
  const n = Math.round(value);
  return (
    <div className="stars">
      {Array.from({length:5}).map((_,i)=>(
        <FaStar key={i} size={size} className={i<n ? "" : "opacity-30"} />
      ))}
      <span className="text-muted text-sm ml-1">{value.toFixed(1)} / 5</span>
    </div>
  );
}
