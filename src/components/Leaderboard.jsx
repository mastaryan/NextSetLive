import React from 'react'
import RatingStars from './RatingStars'

export default function Leaderboard({rows=[], title='Leaderboard'}){
  return (
    <div style={{border:'1px solid #eee', borderRadius:12, overflow:'hidden'}}>
      <div style={{padding:12, background:'#fafafa', borderBottom:'1px solid #eee'}}><strong>{title}</strong></div>
      <table style={{width:'100%', borderCollapse:'collapse'}}>
        <thead>
          <tr style={{textAlign:'left', background:'#fff'}}>
            <th style={th()}>#</th>
            <th style={th()}>Venue</th>
            <th style={th()}>Shows</th>
            <th style={th()}>Tickets (YTD)</th>
            <th style={th()}>Avg Rating</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i)=> (
            <tr key={r.venueId} style={{borderTop:'1px solid #f0f0f0'}}>
              <td style={td()}>{i+1}</td>
              <td style={td()}>{r.venueName}</td>
              <td style={td()}>{r.shows}</td>
              <td style={td()}>{r.tickets}</td>
              <td style={td()}><RatingStars value={r.avgRating}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function th(){ return {padding:'10px 12px', fontSize:12, color:'#666'} }
function td(){ return {padding:'10px 12px', fontSize:14} }
