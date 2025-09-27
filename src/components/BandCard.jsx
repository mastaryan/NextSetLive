import { Link } from 'react-router-dom'


export default function BandCard({ band }){
return (
<div className="ns-card ns-card-row">
<img className="ns-thumb" src={band.image} alt={`${band.name} promo`} />
<div className="ns-card-body">
<h3>{band.name}</h3>
<p className="muted">{band.genres.join(' · ')}</p>
<p className="clamp-2">{band.shortBio}</p>
<div className="ns-card-actions">
<Link className="ns-btn sm" to={`/bands/${band.slug}`}>View Profile</Link>
</div>
</div>
</div>
)
}