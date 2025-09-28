import React, { useState } from "react";

export default function Join(){
  const [role, setRole] = useState("band");
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted ${role} application — demo only (no data sent).`);
  };
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-extrabold mb-4 text-green-400">Join NextSetLive</h1>
      <p className="text-gray-300 mb-6">
        Create a profile to start booking gigs faster. Choose your role below.
      </p>

      <div className="flex gap-3 mb-6">
        {["band","venue","agent"].map(r => (
          <button
            key={r}
            onClick={()=>setRole(r)}
            className={`px-4 py-2 rounded-lg border ${role===r ? "bg-purple-600 border-purple-500" : "bg-gray-900 border-gray-700 hover:border-purple-500"}`}
          >
            {r[0].toUpperCase()+r.slice(1)}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900 border border-gray-800 p-4 rounded-xl">
        {role !== "venue" && (
          <label className="block">
            <span className="text-sm text-gray-400">Act / Band Name</span>
            <input required className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="Neon Pines" />
          </label>
        )}
        {role === "venue" && (
          <label className="block">
            <span className="text-sm text-gray-400">Venue Name</span>
            <input required className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="The Masquerade" />
          </label>
        )}
        {role === "agent" && (
          <label className="block md:col-span-2">
            <span className="text-sm text-gray-400">Agency Name</span>
            <input required className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="Green Room Agency" />
          </label>
        )}
        <label className="block">
          <span className="text-sm text-gray-400">{role==="venue" ? "Capacity" : "Primary Genre"}</span>
          <input className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder={role==="venue" ? "1000" : "Psych Rock"} />
        </label>
        <label className="block">
          <span className="text-sm text-gray-400">City</span>
          <input className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="Louisville" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-400">State</span>
          <input className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="KY" />
        </label>
        <label className="block">
          <span className="text-sm text-gray-400">Email</span>
          <input type="email" className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="booking@example.com" />
        </label>
        <label className="block md:col-span-2">
          <span className="text-sm text-gray-400">Links (Spotify, Instagram, Facebook, Website)</span>
          <input className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded" placeholder="https://..." />
        </label>

        {role !== "venue" && (
          <label className="block md:col-span-2">
            <span className="text-sm text-gray-400">Do you need ticketing assistance?</span>
            <select className="w-full p-2 mt-1 bg-gray-800 border border-gray-700 rounded">
              <option>No</option>
              <option>Yes — connect me with Stripe</option>
              <option>Yes — help me integrate my existing ticketing</option>
            </select>
          </label>
        )}

        <div className="md:col-span-2 flex items-center justify-end gap-3 mt-2">
          <button type="reset" className="px-4 py-2 rounded-lg border border-gray-700">Clear</button>
          <button type="submit" className="px-5 py-2 rounded-lg bg-green-500 text-black font-bold hover:bg-green-400">Submit</button>
        </div>
      </form>
    </div>
  );
}
