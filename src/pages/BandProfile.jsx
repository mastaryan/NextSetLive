import React from "react";
import { useParams } from "react-router-dom";
import bands from "../data/bands";
import shows from "../data/shows";
import { FaSpotify, FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import Stars from "../components/Stars";

export default function BandProfile(){
  const { bandId } = useParams();
  const band = bands.find(b=>b.id===bandId);
  if(!band) return <div className="p-6">Band not found.</div>;

  const upcoming = shows.filter(s => s.bandId===bandId && new Date(s.date) > new Date());
  const prior    = shows.filter(s => s.bandId===bandId && new Date(s.date) <= new Date()).slice(-3).reverse();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="card" style={{display:'flex',gap:18,alignItems:'center'}}>
        <img src={band.image} alt={band.name} width="220" height="140" style={{objectFit:'cover',borderRadius:14}} />
        <div style={{flex:1}}>
          <h1 className="text-3xl font-extrabold text-green-400">
            {band.name} {band.verified && <span className="badge-verified" style={{marginLeft:8}}>Verified</span>}
          </h1>
          <div className="mt-2"><Stars value={band.rating || 0} /></div>

          <div style={{display:'flex',gap:12,marginTop:10,fontSize:20}}>
            {band.spotify && <a href={band.spotify} target="_blank" rel="noreferrer"><FaSpotify/></a>}
            {band.instagram && <a href={band.instagram} target="_blank" rel="noreferrer"><FaInstagram/></a>}
            {band.facebook && <a href={band.facebook} target="_blank" rel="noreferrer"><FaFacebook/></a>}
            {band.website && <a href={band.website} target="_blank" rel="noreferrer"><FaGlobe/></a>}
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Upcoming Shows</h2>
      <div className="grid-cards">
        {upcoming.map(s=>(
          <div key={s.id} className="card">
            <div className="font-semibold">{s.venueName}</div>
            <div className="text-muted">{s.city}, {s.state} — {new Date(s.date).toLocaleString()}</div>
            <a className="btn btn-green mt-3 inline-block" href={`/ticket/checkout?show=${s.id}`}>Buy Tickets</a>
          </div>
        ))}
        {upcoming.length===0 && <div className="text-muted">No upcoming shows.</div>}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-2">Recent Reviews</h2>
      <div className="grid-cards">
        {band.reviews.map((r,i)=>(
          <div key={i} className="card">
            <div className="text-yellow-400" aria-label={`${r.stars} stars`}>{"★".repeat(r.stars)}{"☆".repeat(5-r.stars)}</div>
            <div className="mt-2">{r.text}</div>
            <div className="text-muted text-sm mt-1">— {r.by}</div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-8 mb-2">Prior Shows</h2>
      <div className="grid-cards">
        {prior.map(s=>(
          <div key={s.id} className="card">
            <div className="font-semibold">{s.venueName}</div>
            <div className="text-muted">{new Date(s.date).toLocaleDateString()}</div>
            <div className="hr"></div>
            <div className="text-sm text-muted">
              Tickets sold: {s.ticketsSold ?? "—"} • Verified: {s.verified ?? "—"} • Views: {s.views ?? "—"}
            </div>
          </div>
        ))}
        {prior.length===0 && <div className="text-muted">No prior shows logged.</div>}
      </div>
    </div>
  );
}
