// NextScore: simple average of review ratings (1-5). If none, return null (NEW).
export function computeNextScore(entity){
  const arr = entity?.reviews?.map(r => r.rating).filter(n => typeof n==='number') || [];
  if(!arr.length) return null;
  const avg = arr.reduce((a,b)=>a+b,0)/arr.length;
  return avg;
}
