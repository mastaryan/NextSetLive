// ProfilePage.jsx
import React from 'react';

export default function ProfilePage({ profile }) {
  if (!profile) return <div className="text-white p-8">Loading profile...</div>;

  const isBand = profile.type === 'band';

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-green-400 mb-2">{profile.name}</h1>
        <p className="text-purple-300 text-lg mb-6">{isBand ? profile.bandName : profile.venueName}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isBand && (
            <>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-green-300">Genres</h2>
                <p>{profile.genres.join(', ')}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-green-300">Ticketing</h2>
                <p>{profile.ticketingLink || 'Not Provided'}</p>
                <p>{profile.needsTicketingHelp ? 'Needs ticketing help' : ''}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-green-300">Socials</h2>
                <ul className="space-y-1 text-sm text-blue-300">
                  {profile.facebook && <li><a href={profile.facebook} target="_blank">Facebook</a></li>}
                  {profile.instagram && <li><a href={profile.instagram} target="_blank">Instagram</a></li>}
                  {profile.x && <li><a href={profile.x} target="_blank">X</a></li>}
                  {profile.snapchat && <li><a href={profile.snapchat} target="_blank">Snapchat</a></li>}
                  {profile.soundcloud && <li><a href={profile.soundcloud} target="_blank">SoundCloud</a></li>}
                  {profile.youtube && <li><a href={profile.youtube} target="_blank">YouTube</a></li>}
                  {profile.spotify && <li><a href={profile.spotify} target="_blank">Spotify</a></li>}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-green-300">Upcoming Shows</h2>
                <ul className="list-disc list-inside">
                  {profile.upcomingShows?.length > 0 ? profile.upcomingShows.map((show, i) => (
                    <li key={i}>{show}</li>
                  )) : <li>No shows listed</li>}
                </ul>
              </div>
            </>
          )}

          {!isBand && (
            <>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-300">Venue Address</h2>
                <p>{profile.venueAddress}, {profile.venueCity}, {profile.venueState} {profile.venueZip}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-300">Capacity</h2>
                <p>{profile.venueCapacity}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2 text-purple-300">Recent Bookings</h2>
                <ul className="list-disc list-inside">
                  {profile.recentBookings?.length > 0 ? profile.recentBookings.map((band, i) => (
                    <li key={i}>{band}</li>
                  )) : <li>No recent bookings</li>}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
