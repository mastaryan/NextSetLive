import React from "react";

export default function CalendarSubscribe({ entity }) {
  return (
    <div className="mt-4">
      <p className="text-sm">Subscribe to {entity.name}’s calendar:</p>
      <div className="flex gap-2 mt-2">
        <button className="bg-gray-700 px-3 py-1 rounded">Google</button>
        <button className="bg-gray-700 px-3 py-1 rounded">iCal</button>
      </div>
    </div>
  );
}
