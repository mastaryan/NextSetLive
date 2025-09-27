import React from "react";

export default function NextScoreBadge({ score }){
  const val = typeof score === "number" ? score : null;
  const pct = val==null ? 0 : Math.max(0, Math.min(100, Math.round((val/5)*100)));
  const radius = 18;
  const circ = 2 * Math.PI * radius;
  const dash = (pct/100) * circ;

  return (
    <div className="relative w-12 h-12" title={val==null ? "New" : `NextScore ${val.toFixed(1)}/5`}>
      <svg viewBox="0 0 48 48" className="w-12 h-12">
        <circle cx="24" cy="24" r={radius} stroke="#222" strokeWidth="6" fill="none"/>
        <circle cx="24" cy="24" r={radius} stroke="url(#grad)" strokeWidth="6" fill="none" strokeDasharray={`${dash} ${circ-dash}`} strokeLinecap="round" transform="rotate(-90 24 24)"/>
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#8B5CF6"/><stop offset="100%" stopColor="#22C55E"/>
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
        {val==null ? "NEW" : val.toFixed(1)}
      </div>
    </div>
  );
}
