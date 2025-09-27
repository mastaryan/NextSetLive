import React from "react";
import bands from "../data/bands";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";

export default function BandDirectory(){
  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-green-400 mb-4">Bands</h1>
      <div className="grid-cards">
        {bands.map(b=>(
          <div key={b.id} className="card">
            <div style={{display:'flex',gap:14}}>
              <img src={b.image} alt={b.name} width="96" height="64" style={{objectFit:'cover',borderRadius:12}}/>
              <div>
                <h3 className="text-xl font-bold"><Link to={`/band/${b.id}`}>{b.name}</Link></h3>
                <div className="mt-1"><Stars value={b.rating || 0} /></div>
              </div>
            </div>
            <div className="hr"></div>
            <Link to={`/band/${b.id}`} className="btn btn-purple inline-block">View Profile</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
