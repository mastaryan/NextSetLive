import React, { useMemo, useState } from "react";
import venues from "../data/venues";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";

export default function VenueDirectory(){
  const [filter, setFilter] = useState("");

  const list = useMemo(()=>{
    const v = filter.trim().toLowerCase();
    return v ? venues.filter(x => x.state.toLowerCase().includes(v)) : venues;
  },[filter]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold text-purple-400 mb-3">Venues</h1>

      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <label className="text-sm text-muted">Filter by state:</label>
        <input
          value={filter}
          onChange={e=>setFilter(e.target.value)}
          placeholder="e.g., KY"
          style={{width:100}}
        />
      </div>

      <div className="grid-cards mt-5">
        {list.map(v => (
          <div key={v.id} className="card">
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'start', gap:10}}>
              <h3 className="text-green-400 text-xl font-extrabold">
                <Link to={`/venue/${v.id}`}>{v.name}</Link>
              </h3>
              {v.verified && <span className="badge-verified">Verified</span>}
            </div>

            <div className="text-muted" style={{marginTop:6}}>
              {v.city}, {v.state}
            </div>

            {/* Keep cards same height by splitting fields onto their own lines */}
            <div className="hr"></div>
            <div>Capacity: <span className="text-muted">{v.capacity}</span></div>
            <div>Email: <span className="text-muted">{v.email || "—"}</span></div>
            <div>Facebook: {v.facebook ? <a href={v.facebook} target="_blank" rel="noreferrer" className="text-blue-300 underline">link</a> : <span className="text-muted">—</span>}</div>

            <div className="hr"></div>
            <Stars value={v.rating || 0} />
          </div>
        ))}
      </div>
    </div>
  );
}
