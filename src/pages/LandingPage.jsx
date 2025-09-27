import React from "react"

export default function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-400 mb-4">Welcome to NextSetLive</h1>
      <p className="text-gray-300 mb-8">
        Book smarter. Verify sales. Build trust. NextSetLive gives bands and venues a credibility layer,
        real ticket metrics, and tools for last-minute fills.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Band Waitlist */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold text-green-400 mb-2">🎸 Bands — Join the Waitlist</h2>
          <p className="mb-4 text-gray-400">Claim your profile, link socials, and start building credibility.</p>
          <form className="space-y-3">
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Band Name" />
            <div className="grid grid-cols-2 gap-3">
              <input className="bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="City" />
              <input className="bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="State" />
            </div>
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Contact Email" />
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Instagram URL" />
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Spotify URL" />
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Website (optional)" />
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Typical Draw (avg tickets)" />
            <button type="submit" className="w-full px-4 py-2 rounded-lg font-bold bg-green-500 text-black hover:bg-green-600">Join as Band</button>
          </form>
        </div>

        {/* Venue Waitlist */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h2 className="text-2xl font-semibold text-purple-400 mb-2">🏟️ Venues — Join the Waitlist</h2>
          <p className="mb-4 text-gray-400">Verify online sales, manage door adds, and discover fill-ins fast.</p>
          <form className="space-y-3">
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Venue Name" />
            <div className="grid grid-cols-2 gap-3">
              <input className="bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="City" />
              <input className="bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="State" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input className="bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Capacity" />
              <input className="bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Booking Email" />
            </div>
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Website" />
            <input className="w-full bg-black text-white px-3 py-2 rounded-md border border-gray-700" placeholder="Instagram URL" />
            <button type="submit" className="w-full px-4 py-2 rounded-lg font-bold bg-purple-500 text-black hover:bg-purple-600">Join as Venue</button>
          </form>
        </div>
      </div>
    </div>
  )
}
