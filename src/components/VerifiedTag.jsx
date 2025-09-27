import React from "react";

export default function VerifiedTag(){
  return (
    <span className="inline-flex items-center gap-1 text-emerald-400 text-xs bg-emerald-500/10 border border-emerald-700/40 px-2 py-1 rounded-full">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M10.8 2.4c.9-.5 1.9-.5 2.8 0l6 3.3c.9.5 1.4 1.4 1.4 2.4v6.7c0 1-.6 1.9-1.4 2.4l-6 3.3c-.9.5-1.9.5-2.8 0l-6-3.3A2.8 2.8 0 0 1 3.4 15V8.1c0-1 .5-2 1.4-2.4l6-3.3zM10 13l-2-2 1.4-1.4L10 10.2l4.6-4.6L16 7l-6 6z"/>
      </svg>
      Verified
    </span>
  );
}
