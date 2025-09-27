import { Link } from 'react-router-dom'
import useSEO from '../utils/useSEO'
export default function NotFound(){
  useSEO('404 — Page Not Found','This page could not be found on NextSetLive.')
  return (<div className="ns-container" style={{ textAlign: 'center', padding: '80px 20px' }}><h1>404</h1><p>Page not found.</p><Link to="/" className="ns-btn">Go Home</Link></div>)
}
