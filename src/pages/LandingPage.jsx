import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-green-400">
        Welcome to NextSetLive
      </h1>
      <p className="mb-8 max-w-2xl text-gray-300">
        NextSetLive connects bands and venues with verified ticket sales, real
        reviews, and credibility scores. Bands showcase their draw, venues find
        reliable talent — everyone wins.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Band Signup */}
        <div className="bg-gray-900 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">🎸 Bands</h2>
          <p className="mb-4 text-gray-300">
            Claim your profile, add socials, manage shows, and grow your score.
          </p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Band Name"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Contact Email"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <input
              type="text"
              placeholder="Spotify / Instagram link"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <button className="px-4 py-2 rounded bg-green-500 text-black font-bold hover:bg-green-400">
              Join Waitlist
            </button>
          </form>
        </div>

        {/* Venue Signup */}
        <div className="bg-gray-900 rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">🏟️ Venues</h2>
          <p className="mb-4 text-gray-300">
            Manage your profile, upcoming shows, verified ticket sales, and
            reviews.
          </p>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Venue Name"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <input
              type="number"
              placeholder="Capacity"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Booking Email"
              className="p-2 rounded bg-black border border-gray-700 text-white"
            />
            <button className="px-4 py-2 rounded bg-green-500 text-black font-bold hover:bg-green-400">
              Join Waitlist
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12">
        <Link
          to="/venues"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-bold"
        >
          Explore Venues
        </Link>
      </div>
    </div>
  );
}
