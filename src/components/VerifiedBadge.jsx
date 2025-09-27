import React from 'react'

export default function VerifiedBadge({label='Verified'}){
  return (
    <span style={{display:'inline-flex', alignItems:'center', gap:6, background:'#f0e9ff', border:'1px solid #d8caff', borderRadius:999, padding:'4px 8px'}}>
      <img src="/assets/verified.svg" alt="verified" width="16" height="16"/>
      <span style={{fontSize:12, color:'#4b2bbf'}}>{label}</span>
    </span>
  )
}
